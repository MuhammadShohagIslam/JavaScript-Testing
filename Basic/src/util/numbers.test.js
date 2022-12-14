import { it, expect } from "vitest";
import { transformToNumber, transformToNumbers } from "./numbers";

it("should yeild number value if we provide string value in the function argument", () => {
    // Arrange
    const number = "1";

    // Act
    const result = transformToNumber(number);

    // Assert
    expect(result).toBe(+number);
});

it("should transform a string number to a number of type number", () => {
    // Arrange
    const number = "1";

    // Act
    const result = transformToNumber(number);

    // Assert
    expect(result).toBeTypeOf("number");
});

it("should yeild NaN if we do not provide any value in the function argument", () => {
    // Act
    const result = transformToNumber();

    // Assert
    expect(result).toBeNaN();
});

// multiple expectation
it("should yeild NaN for non-transformable values", () => {
    // Arrange
    const inputs = "invalid"
    const input2 = {}
    // Act
    const result = transformToNumber(inputs);
    const result2 = transformToNumber(input2);
    
    // Assert
    expect(result).toBeNaN();
    expect(result2).toBeNaN();
});

/*
 *** Throwing Error ***
 */
it("should throw Error if we do not provide any value in the function argument", () => {
    const resultFn = () => {
        // Act
        transformToNumbers();
    };
    // Assert
    expect(resultFn).toThrow(/Without value it is NaN/);
});
