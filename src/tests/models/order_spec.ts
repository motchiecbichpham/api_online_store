import { OrderStore, Order } from "../../models/order";

const store = new OrderStore();

describe("Order Model", () => {
  it("index method should return a list of Order", async () => {
    const order: Order = {
      user_id: "1",
      status: "not completed",
    };
    await store.create(order);
    const orders = await store.index();

    expect(orders.length).toBeGreaterThan(0);
  });
});
