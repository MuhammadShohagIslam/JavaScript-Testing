import { it, expect } from "vitest";
import { add } from "./math";
/*
    *** Why Are You Test ***
        => It makes it easy to check our code, when changes to that code are 
        made, then we can evaluate whether that was an intended change, if 
        things break.
*/

it("should summarize all number values in an array", () => {
    // arrange
    const number1 = 1;
    const number2 = 1;

    // Act
    const result = add([number1, number2]);

    // Assert
    expect(result).toBe(2);
});
it("should summarize all number values in an array", () => {
    // arrange
    const number1 = 1;
    const number2 = 1;

    // Act
    const result = add([number1, number2]);

    // Assert
    // it will be good to calculate expected value without hard code expected value
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
  
    expect(result).toBe(expectedResult)
});
/*
    *** Keep Our Test Simple ***
        => Do not want to make them unnecessarily complex, beacuse we always have to think about ourself coming back to a test after a couple of weeks.Or may be fellow developer diving into test
*/

it("should summarize all number values in an array", () => {
    // Arrange
    //const numbers = [1,2,3,4,5] // it will complext
    const numbers = [1,2] // it will simple, it will not effect, beacuse result will be always same.
    // Act
    const result = add(numbers);

    // Assert
    // it will be good to calculate expected value without hard code expected value
    const expectedResult = numbers.reduce((acc, cur) => {
        return (acc += cur);
    }, 0);
    expect(result).toBe(expectedResult);
});

/*
    *** Defining Behaviors & Fixing Errors In Our Code ***
        => We should test as many as possibile way to test our code,
        should try invalid value, it will be good for big application
*/
it("should yeild NaN if a least one invalid number is provider", ()=>{
    // Arrange
    const inputs = ['invalid', 1];

    // Act
    const result = add(inputs);

    // Assert
    expect(result).toBeNaN();
})
/*
    *** The idea behind tests ***
        => We want to detect problems even if our code right now
            or even if all the test pass right now, in the future if the
            code maybe gets changed.
*/

it("should yeild a correct sum if we provide numeric string array", () => {
    // Arrange
    const numbers = ["1", "2"];
    // Act
    const result = add(numbers);
    // Assert
    const expectedResult = numbers.reduce((acc, cur) => {
        return (acc += cur);
    }, 0);
    expect(result).toBe(expectedResult)
})

