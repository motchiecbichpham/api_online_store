import supertest from "supertest";
import app from "../../server";
import { OrderStore } from "../../models/order";

const request = supertest(app);
const token: string = process.env.TOKEN_TEST as string;

describe("users endpoint response test suite", () => {
  beforeAll(() => {
    spyOn(OrderStore.prototype, "index").and.returnValue(
      Promise.resolve([
        {
          user_id: "1",
          status: "completed",
        },
      ])
    );
    spyOn(OrderStore.prototype, "show").and.returnValue(
      Promise.resolve({
        user_id: "1",
        status: "completed",
      })
    );
    spyOn(OrderStore.prototype, "create").and.returnValue(
      Promise.resolve({
        user_id: "1",
        status: "completed",
      })
    );
    spyOn(OrderStore.prototype, "ordersByUser").and.returnValue(
      Promise.resolve([
        {
          user_id: "1",
          status: "completed",
        },
      ])
    );
    spyOn(OrderStore.prototype, "completedOrders").and.returnValue(
      Promise.resolve([
        {
          user_id: "1",
          status: "completed",
        },
      ])
    );
  });

  it("get all orders index endpoint", async () => {
    const res = await request
      .get("/orders")
      .set("Authorization", "Bearer " + token);
    expect(res.status).toBe(200);
    expect(res.body).toBeDefined();
  });
  it("get all orders by user endpoint", async () => {
    const res = await request
      .get("/orders/user_id/1")
      .set("Authorization", "Bearer " + token);
    expect(res.status).toBe(200);
    expect(res.body).toBeDefined();
  });
  it("get all orders by status endpoint", async () => {
    const res = await request
      .get("/users/1/orders/completed")
      .set("Authorization", "Bearer " + token);
    expect(res.status).toBe(200);
    expect(res.body).toBeDefined();
  });
  it("get specific order show endpoint", async () => {
    const res = await request
      .get("/orders/1")
      .set("Authorization", "Bearer " + token);
    expect(res.status).toBe(200);
    expect(res.body).toBeDefined();
  });

  it("post order creation endpoint", async () => {
    const res = await request
      .post("/orders")
      .set("Authorization", "Bearer " + token);
    expect(res.status).toBe(200);
  });
});
