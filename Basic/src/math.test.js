import { it, expect } from "vitest";
import { add } from "./math";

it("should summarize all number values in an array", () => {
    // arrange
    const number1 = 1;
    const number2 = 1;

    // Act
    const result = add([number1, number2]);

    // Assert
    const expectedResult = [number1, number2].reduce((acc, cur) => {
        return (acc += cur);
    }, 0);
    expect(result).toBe(expectedResult);
});

it("should summarize string number of array", () => {
    // arrange
    const number1 = "1";
    const number2 = 1;

    // Act
    const result = add([number1, number2]);

    // Assert
    const expectedResult = [number1, number2].reduce((acc, cur) => {
        return (acc += +cur);
    }, 0);
    console.log(expectedResult);
    expect(result).toBe(expectedResult)
});
