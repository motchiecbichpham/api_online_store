import { UserStore, User } from "../../models/user";

const store = new UserStore();

describe("User Model", () => {
  it("should have index method", () => {
    expect(store.index).toBeDefined();
  });

  it("index method should return a list of users", async () => {
    const result = await store.index();
    expect(result).toBeDefined();
  });
});
