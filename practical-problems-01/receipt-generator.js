/*
  Problem 2: Receipt Generator (Template Strings)
  Build a receipt generator using template strings — take item name,
  price, qty as input, output formatted multiline receipt.

  Example: Input ("Pen", 20, 3) -> Output "Pen x3 = 60 Taka"
*/

const receiptGenerator = (name, price, qty) => `${name} x${qty} = ${price * qty} Taka`;

console.log(receiptGenerator("Pen", 20, 3));
console.log(receiptGenerator("Eraser", 15, 2));