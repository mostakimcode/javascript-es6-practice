/*
  Problem 1: Most Expensive Product
  Given an object of product prices, use Object.keys() or Object.entries() + loop to
  find the most expensive product.

  Example: { pen: 20, book: 150, bag: 500 } -> "bag"
*/


const expensiveProduct = (product) => {
  let keys = Object.keys(product);
  let expensivePrice = 0;
  let expensive = "";
  for(let key of keys){
    if(product[key] > expensivePrice){
      expensivePrice = product[key];
      expensive = `${key}: ${product[key]}`
    }
  }
  return expensive;
}
