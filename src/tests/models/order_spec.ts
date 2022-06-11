import { OrderStore, Order } from "../../models/order";

const store = new OrderStore();

describe("Order Model", () => {
  it("should have index method", () => {
    expect(store.index).toBeDefined();
  });

  it("index method should return a list of Order", async () => {
    const result = await store.index();
    expect(result).toBeDefined();
  });
});
