import { it, describe, expect } from "vitest";

import { HttpError, ValidationError } from "./errors";

describe("HttpError Class", () => {
    it("should contain provided statusCode, message and data", () => {
        const statusCode = 1;
        const message = "test";
        const data = { key: "data text" };

        const httpError = new HttpError(statusCode, message, data);

        expect(httpError.statusCode).toBe(statusCode);
        expect(httpError.message).toBe(message);
        expect(httpError.data).toBe(data);
    });

    it("should contain undefined as data if not provided data", () => {
        const statusCode = 1;
        const message = "test";

        const httpError = new HttpError(statusCode, message);

        expect(httpError.statusCode).toBe(statusCode);
        expect(httpError.message).toBe(message);
        expect(httpError.data).toBeUndefined();
    });
});

describe("ValidationError Class", () => {
    it("should contain provided message", () => {
        const message = "abc";

        const validationError = new ValidationError(message);

        expect(validationError.message).toBe(message);
    });

    it("should contain undefined as message  if not provided", () => {
        const validationError = new ValidationError();

        expect(validationError.message).not.toBeDefined();
    });
});
