export function transformToNumber(value) {
  return +value;
}

/*
  *** For Throwing Error ***
*/
export function transformToNumbers(value) {
  if(!value){
    throw new Error("Without value it is NaN")
  }
  return +value;
}