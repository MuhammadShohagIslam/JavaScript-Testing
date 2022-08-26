import { it, expect, describe } from "vitest";
import { transformToNumber, transformToNumbers, cleanNumbers } from "./numbers";

describe("transformToNumber()", () => {
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
        const inputs = "invalid";
        const input2 = {};
        // Act
        const result = transformToNumber(inputs);
        const result2 = transformToNumber(input2);

        // Assert
        expect(result).toBeNaN();
        expect(result2).toBeNaN();
    });
});

describe("transformToNumbers()", () => {
    it("should throw Error if we do not provide any value in the function argument", () => {
        const resultFn = () => {
            // Act
            transformToNumbers();
        };
        // Assert
        expect(resultFn).toThrow(/Without value it is NaN/);
    });
});

describe("cleanNumbers()", () => {
    it("should return array of number value if array of string number is provided", () => {
        // Arrange
        const numbers = ["1", "2"];

        // Act
        const cleanedNumbers = cleanNumbers(numbers);

        // Assert
        expect(cleanedNumbers[0]).toBeTypeOf("number");
    });

    it("should throw an error if an array with at least one empty string provided", () => {
        // Arrange
        const numbers = ["", 1];

        // Act
        const resultFn = () => {
            cleanNumbers(numbers);
        };

        // Assert
        expect(resultFn).toThrow();
    });
});
