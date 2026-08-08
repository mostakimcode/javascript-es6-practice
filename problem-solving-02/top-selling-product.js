/*
Task 10: getTopSellingProduct(orders) — Mixed (map + reduce, capstone-style) 
Given an array of orders { product, unitsSold }, 
return the name of the product with the highest total units sold across all orders (a product may appear in multiple orders).

Input: [{ product: "Pen", unitsSold: 30 }, { product: "Bag", unitsSold: 52 }, { product: "Pen", unitsSold: 25 }] 

Output: "Pen"
*/


const getTopSellingProduct = (orders) => {
    let newArray = [];
    orders.map((order) => {
        let existingOrder = newArray.find(item => item.product == order.product)
        if (existingOrder) {
            existingOrder.unitsSold += order.unitsSold
        } else {
            newArray.push({ ...order, unitsSold: order.unitsSold })
        }
    })

    return newArray.reduce((max, order) => {
        return max.unitsSold < order.unitsSold ? order : max;
    }).product;
}