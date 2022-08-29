import { it, expect, vi } from "vitest";

import { sendDataRequest } from "./http";

/*
    When we deal with global module, we can use not mock for replace ment this, use stubGlobal()
*/
const testResponseData = {
    testKey: "abc",
};
const fetchFn = vi.fn((url, option) => {
    return new Promise((resolve, reject) => {
        if (typeof option.body !== "string") {
            return reject("Not A String!");
        }
        const responseData = {
            ok: true,
            json() {
                return new Promise((resolve, reject) => {
                    resolve(testResponseData);
                });
            },
        };

        resolve(responseData);
    });
});

vi.stubGlobal("fetch", fetchFn);

it("should return any available response data", () => {
    const fetchData = {
        key: "abc",
    };

    return expect(sendDataRequest(fetchData)).resolves.toEqual(
        testResponseData
    );
});

it("should reject response if not provided JSON data", async () => {
    const fetchData = {
        key: "abc",
    };

    let errorMessage;

    try {
        await sendDataRequest(fetchData);
    } catch (error) {
        errorMessage = error;
    }

    expect(errorMessage).not.toBe("Not A String!");
});
