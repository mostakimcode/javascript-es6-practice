/*
  Problem 1: Flexible Total Calculator
  calculateTotal(...prices) using rest params, sums any number of
  prices.

  Example: calculateTotal(0, 100, 200, 300) -> 600
  Example: calculateTotal(10, 100, 200) -> 270   (10 = discount%)
*/

// Simple rule: discount is ALWAYS the first argument.

const calculateTotal = (discount, ...prices) => {
  console.log(discount, prices);
  let finalPrice = 0;
  let total = prices.reduce((sum, value) => sum + value, 0);
  if( discount > 0){
    finalPrice = total - (total * discount) / 100;
  } else if(discount === 0){
    finalPrice = total;
  } else {
    return "Invalid";
  }
    return finalPrice;
}