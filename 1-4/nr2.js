"use strict";

let positives = (arr) => {
  let newArr = [];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > 0) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
};

console.log(positives([1, -3, 5, -3, 0]));
console.log(positives([1, 2, 3]));
console.log(positives([-1, -2, -3]));
