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
