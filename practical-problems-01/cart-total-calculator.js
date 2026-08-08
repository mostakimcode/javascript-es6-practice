/*
  Problem 2: Cart Total Calculator
  
  You have an array of cart items, each with a name, price, and qty
  (quantity). Calculate:
    1. Total number of items in the cart (sum of all qty)
    2. Total cost (sum of price x qty for each item)

  Then print one final message using a template string:
    "Total: X items, Y Taka"

  Input:
    [
      { name: "Pen", price: 100, qty: 1 },
      { name: "Notebook", price: 100, qty: 2 }
    ]

  Output:
    "Total: 3 items, 300 Taka"

  Bonus: if the cart is missing (null/undefined), don't crash —
  print "Total: 0 items, 0 Taka" instead.
*/

const cartCalculator = (products) => {
  let totalPrice = 0;
  let totalQty = 0;

  for (let product of products) {
    const { price, qty } = product;
    totalQty += qty;

    totalPrice += price * qty;
  }

  return `Total: ${totalQty} items, ${totalPrice} Taka`
}

