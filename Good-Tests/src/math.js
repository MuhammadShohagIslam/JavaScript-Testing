import { cleanNumbers } from "./util/numbers.js";

export function add(numbers) {
    let sum = 0;

    for (const number of numbers) {
        sum += +number;
    }
    return sum;
}

export function calculateResult(numberInputs){
    let result = "";
    try {
       const numbers = cleanNumbers(numberInputs);
       console.log(numbers)
        result = add(numbers).toString();
    } catch (error) {
        result = error.message;
    }

    return result;

}

/*
    *** Testing For Thrown Errors & Error Messages ***
    .toThrow(argument) => we can pass optional argument
*/

export function added(numbers) {
  let sum = 0;

  throw new Error("is not iterable")
  for (const number of numbers) {
      sum += +number;
  }
  return sum;
}