import { it, describe, expect } from "vitest";
import { generateTextResult } from "./output";

describe("generateTextResult()", () => {
    it("should yeild result as a text if we provide number in the function paramater", () => {
        // Arrange
        const numbers = 4;
        // Act
        const result = generateTextResult(numbers);
        // Assert
        expect(result).toBe(`Result: ${numbers}`);
    });

    it("should return a string that contains the calculation result if a number is provided as a result", () => {
        // Arrange
        const result = 4;
        // Act
        const resultText = generateTextResult(result);
        // Assert
        expect(resultText).toContain(result.toString());
    });

    it("should return string no matter which value is passed in", () => {
        // Arrange
        const value1 = 1;
        const value2 = false;
        const value3 = "invalid";
        // Act
        const result = generateTextResult(value1);
        const result1 = generateTextResult(value2);
        const result2 = generateTextResult(value3);
        // Assert
        expect(result).toBeTypeOf("string");
        expect(result1).toBeTypeOf("string");
        expect(result2).toBeTypeOf("string");
    });

    it("should return empty string if 'no-calc' is provided as a result", () => {
        // Arrange
        const result = "no-calc";
        // Act
        const resultText = generateTextResult(result);
        // Assert
        expect(resultText).toBe("");
    });

    it("should return a string that contains 'Invalid' if 'invalid' is provided as a result", () => {
        // Arrange
        const result = "invalid";
        // Act
        const resultText = generateTextResult(result);
        // Assert
        expect(resultText).toContain("Invalid");
    });
});
