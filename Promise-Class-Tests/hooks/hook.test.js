import { it, expect } from "vitest";

import { User } from "./hook";

it("should update the email", () => {
    const testEmail = "test@gmail.com";
    const newEmail = "a@gmail.com";

    const user = new User(testEmail);
    user.updateEmail(newEmail);

    expect(user.email).toBe(newEmail);
});

it("should have email property", () => {
    const testEmail = "test@gmail.com";

    const user = new User(testEmail);

    expect(user).toHaveProperty("email");
});

it("should store the provided email value", () => {
    const testEmail = "test@gmail.com";

    const user = new User(testEmail);

    expect(user.email).toBe(testEmail);
});

it("should clear the email", () => {
    const testEmail = "test@gmail.com";

    const user = new User(testEmail);
    user.clearEmail();

    expect(user.email).toBe("");
});

it("should still have email property after clearing the email value", () => {
    const testEmail = "test@gmail.com";

    const user = new User(testEmail);
    user.clearEmail();

    expect(user).toHaveProperty("email");
});
