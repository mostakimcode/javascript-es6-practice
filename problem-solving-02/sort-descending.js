/*
Task 7: sortByPriceDescending(products) — Callback Function 
Given an array of product objects { name, price }, return a new array sorted from lowest to highest price using a comparator callback in sort().

Input: 
[{ name: "Bag", price: 500 }, { name: "Pen", price: 10 }, { name: "Notebook", price: 60 }] 

Output:
 [{ name: "Pen", price: 10 }, { name: "Notebook", price: 60 }, { name: "Bag", price: 500 }]
*/


const sortByPriceDescending =(products) => {
    let descendingProducts =[...products]
    return descendingProducts.sort((a,b) =>{
        return b.price - a.price
    })
}

let products = [{ name: "Bag", price: 500 }, { name: "Pen", price: 10 }, { name: "Notebook", price: 60 }] ;
console.log(sortByPriceDescending(products))