export function add(numbers) {
    let sum = 0;

    for (const number of numbers) {
        sum += +number;
    }
    return sum;
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