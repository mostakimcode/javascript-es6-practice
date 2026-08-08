/*
Task 5: getDiscountedTotalForCategory(products, category) — Chaining map + filter + reduce 
Given an array of products { name, category, price }, return the total price of all products in the given category after applying a 10% discount to each.

Input: 
products = [{ name: "Pen", category: "stationery", price: 100 }, { name: "Bag", category: "accessory", price: 500 }, { name: "Notebook", category: "stationery", price: 60 }], category = "stationery" 

Output: 144
*/



const getDiscountedTotalForCategory = (products, category) =>{
    return products.map((product) =>{
        const {price} = product;
        return {...product, price: price - (price*10)/100}
    }).filter((product) =>{
        const {category: productCategory} = product;
        return productCategory === category
    }).reduce((accumulator, product) =>{
        return accumulator += product.price;
    }, 0)
}