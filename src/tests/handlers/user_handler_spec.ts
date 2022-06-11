import supertest from "supertest";
import app from "../../server";
import { UserStore } from "../../models/user";

const request = supertest(app);
const token: string = process.env.TOKEN_TEST as string;

describe("users endpoint response test suite", () => {
  beforeAll(() => {
    spyOn(UserStore.prototype, "index").and.returnValue(
      Promise.resolve([
        {
          firstName: "hihi",
          lastName: "haha",
        },
      ])
    );
    spyOn(UserStore.prototype, "show").and.returnValue(
      Promise.resolve({
        firstName: "hihi",
        lastName: "haha",
      })
    );
    spyOn(UserStore.prototype, "create").and.returnValue(
      Promise.resolve({
        firstName: "hihi",
        lastName: "haha",
        password: "123",
      })
    );
  });

  it("get all users index endpoint", async () => {
    const res = await request
      .get("/users")
      .set("Authorization", "Bearer " + token);
    expect(res.status).toBe(200);
    expect(res.body).toBeDefined();
  });

  it("get specific users show endpoint", async () => {
    const res = await request
      .get("/users/1")
      .set("Authorization", "Bearer " + token);
    expect(res.status).toBe(200);
    expect(res.body).toBeDefined();
  });

  it("post user creation endpoint", async () => {
    const res = await request.post("/users");
    expect(res.status).toBe(200);
  });
});
