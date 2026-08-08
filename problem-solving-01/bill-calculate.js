/*
Task 1: calculateBill(amount, taxRate = 5) — Default Parameters 
Return the final bill after tax is applied. Default tax rate is 5% when not provided.

Input:  
calculateBill(1000)

Output: 
1050

Input:  
calculateBill(1000, 10)

Output: 
1100
*/


const calculateBill = (amount, taxRate = 5) => {
    let finalAmount = amount + (amount * taxRate) / 100;
    return finalAmount;
}
