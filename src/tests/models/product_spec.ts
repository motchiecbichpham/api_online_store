import { Product, ProductStore } from "../../models/product";

const store = new ProductStore();

describe("Product Model", () => {
  it("index method should return a list of products", async () => {
    const product: Product = {
      name: "Legion",
      price: 12,
      category: "Pen",
    };
    await store.create(product);
    const products = await store.index();

    expect(products.length).toBeGreaterThan(0);
  });
});
