"use strict";

// const input1 = "23, 45, 26, 67, 89";
// const input2 = "15, 75, 33, 55, 66";
// const arr1 = input1.split(", ");
// const arr2 = input2.split(", ");

const arr1 = [23, 45, 26, 67, 89];
const arr2 = [15, 75, 33, 55, 66];

const newArr = arr1.concat(arr2).sort((a, b) => a - b);

console.log(newArr);
