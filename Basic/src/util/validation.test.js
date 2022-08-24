import { it } from "vitest";
import { validateStringNotEmpty, validateNumber } from "./validation";
import { expect } from "vitest";

it("should Error if we do not provide any value in the function argument", () => {
    const resultFn = () => {
        validateStringNotEmpty();
    };
    expect(resultFn).toThrow();
});

it("should yeild undefined if we provide any string value in the function argument", () => {
    // Arrange
    const stringValue = "Abc";
    // Act
    const result = validateStringNotEmpty(stringValue);
    // Assert
    expect(result).toBeUndefined();
});

it("should Error if we provide any number value in the function argument", () => {
    const resultFn = () => {
        validateStringNotEmpty(1);
    };
    expect(resultFn).toThrow();
});

/*
 *** Work with validationNumber() function ***
 */
it("Should throw Error if We Provide character String in the function argument", () => {
    const resultFn = () => {
        validateNumber("a");
    };
    expect(resultFn).toThrow();
});

it("Should yeild undefined if We Provide numeric String and value in the function argument", () => {
    // Arrange
    const numericString = "1";
    // Act
    const result = validateNumber(numericString);
    // Assert
    expect(result).toBeUndefined();
});

it("Should yeild undefined if We Provide numeric value in the function argument", () => {
    // Arrange
    const numericValue = 1;
    // Act
    const result = validateNumber(numericValue);
    // Assert
    expect(result).toBeUndefined();
});

it("Should throw Error if We do not provide any value in the function argument", () => {
    const resultFn = () => {
        validateNumber();
    };
    expect(resultFn).toThrow();
});
