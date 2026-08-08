/*
Task 3: findProductByName(products, name) — find() 
Given an array of product objects, return the first product matching the given name, or undefined if not found.

Input: 
products = [{ name: "Pen", price: 10 }, { name: "Bag", price: 500 }], name = "Bag" 

Output: 
{ name: "Bag", price: 500 }
*/


const findProductByName =(products, name) => {
    return products.find((product) => {
        const {name: productName} = product;
        return productName === name;
    })
}