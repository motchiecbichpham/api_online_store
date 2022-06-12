import { UserStore, User } from "../../models/user";

const store = new UserStore();

describe("User Model", () => {
  it("should have index method", async function () {
    const user: User = {
      firstName: "Legion",
      lastName: "Honey",
      password: "123",
    };
    await store.create(user);
    const users = await store.index();

    expect(users.length).toBeGreaterThan(0);
  });
});
