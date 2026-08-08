/*
  Problem 2: Swap & Rest Extractor
  Swap two variables and extract first/rest elements from an array
  using destructuring, no temp variable.

  Example: a=10, b=5 ----- a=5, b=10
  Example: [10,20,30,40] -> first=10, rest=[20,30,40]
*/


let a = 10;
let b =8;
[a,b] =[b,a];
console.log(`a=${a},b=${b}`)



let arr = [1,2,3,4,5,6];

let [first, ...rest] = arr;

console.log(`first=${first}, rest=[${rest}]`);

