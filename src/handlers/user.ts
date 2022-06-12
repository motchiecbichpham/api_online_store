import express, { Request, Response } from "express";
import { User, UserStore } from "../models/user";
import jwt from "jsonwebtoken";
import verifyToken from "../middleware/verifyToken";
const store = new UserStore();

const index = async (_req: Request, res: Response) => {
  try {
    const users = await store.index();
    res.json(users);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const user = await store.show(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const user: User = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
    };

    const newUser = await store.create(user);
    var accessToken = jwt.sign(
      { firstName: newUser.firstName, password: newUser.password },
      process.env.TOKEN_SECRET || ""
    );
    res.json({ ...newUser, accessToken: accessToken });
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const authenticate = async (req: Request, res: Response) => {
  try {
    const firstName = req.body.firstName;
    const password = req.body.password;
    const currentUser = await store.authenticate(firstName, password);
    if (currentUser) {
      var accessToken = jwt.sign(
        { firstName: currentUser.firstName, passwordp: currentUser.password },
        process.env.TOKEN_SECRET || ""
      );
      res.json({ accessToken: accessToken });
    }
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};
const user_routes = (app: express.Application) => {
  app.get("/users", index);
  app.get("/users/:id", verifyToken, show);
  app.post("/users", create);
  app.post("/users/authenticate", authenticate);
};

export default user_routes;
