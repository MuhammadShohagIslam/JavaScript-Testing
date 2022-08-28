import { it, expect, describe } from "vitest";
import { beforeAll, beforeEach, afterAll, afterEach } from "vitest";
import { User } from "./hook";

const testEmail = "test@gmail.com";
let user;

// this hook running firstly before code run
beforeAll(() => {
    user = new User(testEmail);
});

beforeEach(() => {
    user = new User(testEmail);
});

afterEach(() => {
    //    user = new User(testEmail);
});

// this hook run finally after executed code
afterAll(() => {
    // cleaning up work, like databse data base close()
});

/*
    concurrent method: which speed up our test execution time.
    which very usefull huge test function, and execute paralall.
    Concurrent execution can reduce the amount of time our tests
    need to execute.
*/
// it.concurrent("should update the email", () => {
//     const newEmail = "a@gmail.com";

//     user.updateEmail(newEmail);

//     expect(user.email).toBe(newEmail);
// });
describe.concurrent("User Class", () => {
    it("should update the email", () => {
        const newEmail = "a@gmail.com";

        user.updateEmail(newEmail);

        expect(user.email).toBe(newEmail);
    });

    it("should have email property", () => {
        expect(user).toHaveProperty("email");
    });

    it("should store the provided email value", () => {
        expect(user.email).toBe(testEmail);
    });

    it("should clear the email", () => {
        user.clearEmail();

        expect(user.email).toBe("");
    });

    it("should still have email property after clearing the email value", () => {
        user.clearEmail();

        expect(user).toHaveProperty("email");
    });
});
