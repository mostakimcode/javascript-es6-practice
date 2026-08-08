/*
  Problem 2: Shopping Cart Total (reduce)
  getCartTotal(cart) — sum price * qty across every item in the cart
  using reduce().

  Input:
    cart = [
      { name: "Pen", price: 20, qty: 3 },
      { name: "Notebook", price: 50, qty: 2 },
    ]

  Output:
    160   (20*3 + 50*2)
*/


const getCartTotal = (cart) => {
    const total = cart.reduce((accumulator, value) => {
        return accumulator += value.price * value.qty;
    },0)
    return total;
}