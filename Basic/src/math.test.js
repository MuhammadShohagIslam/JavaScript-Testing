import { it, expect } from "vitest";
import { add, added} from "./math";
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

    expect(result).toBe(expectedResult);
});
/*
    *** Keep Our Test Simple ***
        => Do not want to make them unnecessarily complex, beacuse we always have to think about ourself coming back to a test after a couple of weeks.Or may be fellow developer diving into test
*/

it("should summarize all number values in an array", () => {
    // Arrange
    //const numbers = [1,2,3,4,5] // it will complext
    const numbers = [1, 2]; // it will simple, it will not effect, beacuse result will be always same.
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
it("should yeild NaN if a least one invalid number is provider", () => {
    // Arrange
    const inputs = ["invalid", 1];

    // Act
    const result = add(inputs);

    // Assert
    expect(result).toBeNaN();
});
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
        return (acc += +cur);
    }, 0);
    expect(result).toBe(expectedResult);
});

/*
    *** Writing More Test ***
        => It is depend on we and our expectations, we can think different 
        scenario that could occur, and write approriate tests.
    But writing good test is an iterative process.
        => means we write our tests, then we continue working on our code,
        or may be we will also work on different code.
*/
it("should yeild 0 if an empty array is provided", () => {
    // Arrange
    const numbers = [];

    // Act
    const result = add(numbers);

    // Assert
    expect(result).toBe(0);
});

/*
 *** Testing For Errors ***
 */
it("should throw error if no value is passed into function", () => {
    try {
        // Act
        const result = add();
    } catch (error) {
        // Assert
        expect(error).toBeDefined();
    }
});

// easier way
it("should throw error if no value is passed into function", ()=>{
    const resultFn = () => {
        add();
    }
    // expect of our function and check whether is throw
    expect(resultFn).toThrow();
})

// if we want to use oposite we can use "not"
it("should yeild 0 if an empty array is provided", () => {
    // Arrange
    const numbers = [];

    // Act
    const result = add(numbers);

    // Assert
    // expect(result).not.toBe(0);
});

it("should throw error if provided with multiple arguments instead of array", ()=>{
    const num1 = 1;
    const num2 = 2;

    const resultFun = () => {
        add(num1, num2)
    }
    expect(resultFun).toThrow()

})

/*
    *** Testing For Thrown Errors & Error Messages ***
    .toThrow(argument) => we can pass optional argument
*/
it("should throw error if provided with multiple arguments instead of array", ()=>{
    const num1 = 1;
    const num2 = 2;

    const resultFun = () => {
        added(num1, num2)
    }
    // if we want to excat error
    expect(resultFun).toThrow(/is not iterable/)

})