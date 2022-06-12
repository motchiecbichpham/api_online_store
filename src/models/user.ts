import Client from "../database";
import bcrypt from "bcrypt";
export type User = {
  firstName: string;
  lastName: string;
  password: string;
};

export class UserStore {
  async index(): Promise<{ firstName: string; lastName: string }[]> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT firstName, lastName FROM users";
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (error) {
      throw new Error("Cannot get users");
    }
  }

  async show(id: string): Promise<{ firstName: string; lastName: string }> {
    try {
      const sql = "SELECT firstName, lastName FROM users where id=($1)";
      const conn = await Client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Could not find user ${id}. Error ${error}`);
    }
  }
  async create(u: User): Promise<User> {
    try {
      const saltRounds: string = process.env.SALT_ROUNDS as string;
      const pepper: string = process.env.BCRYPT_PASSWORD as string;
      const sql =
        "INSERT INTO users (firstName, lastName, password) VALUES($1, $2, $3) RETURNING *";
      const hash = bcrypt.hashSync(u.password + pepper, parseInt(saltRounds));
      const conn = await Client.connect();
      const result = await conn.query(sql, [u.firstName, u.lastName, hash]);
      const user = result.rows[0];
      conn.release();
      return user;
    } catch (err) {
      throw new Error(`Could not add new user ${u.firstName}. Error: ${err}`);
    }
  }

  async authenticate(
    firstName: string,
    password: string
  ): Promise<User | null> {
    const pepper: string = process.env.BCRYPT_PASSWORD as string;
    const conn = await Client.connect();
    const sql = "SELECT password FROM users WHERE firstName=($1)";
    const result = await conn.query(sql, [firstName]);

    if (result.rows.length) {
      const user = result.rows[0];
      if (bcrypt.compareSync(password + pepper, user.password)) {
        return user;
      }
    }
    return null;
  }
}
