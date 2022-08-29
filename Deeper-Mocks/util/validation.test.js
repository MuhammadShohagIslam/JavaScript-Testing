import { it, expect } from "vitest";

import { validateNotEmpty } from "./validation";

it("should throw error if an empty string is provided as a value", () => {
    const test = "";

    const resultFn = () => {
        validateNotEmpty(test);
    };

    expect(resultFn).toThrow();
});

it("should throw error if consisting black of empty string is provided as a value", () => {
    const test = "   ";

    const resultFn = () => {
        validateNotEmpty(test);
    };

    expect(resultFn).toThrow();
});

it("should throw excat error message if provided error message as a value", () => {
    const test = "";
    const errorMessage = "Test Error";

    const resultFn = () => {
        validateNotEmpty(test, errorMessage);
    };

    expect(resultFn).toThrow(errorMessage);
});
