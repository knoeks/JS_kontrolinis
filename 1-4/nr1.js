"use strict";

let evenCalculator = (num) => {
  let sum = 0;
  for (let index = 0; index < num; index += 2) {
    sum += index;
  }

  return sum;
};

console.log(evenCalculator(20));
