import { Product, ProductStore } from "../../models/product";

const store = new ProductStore();

describe("Product Model", () => {
  it("should have index method", () => {
    expect(store.index).toBeDefined();
  });

  it("index method should return a list of products", async () => {
    const result = await store.index();
    expect(result).toBeDefined();
  });
});
