/*
Task 4: swapValues(a, b) — Destructuring 
Return [b, a] using array destructuring assignment, no temporary variable.

Input:  
swapValues(5, 10)

Output:
 [10, 5]
*/

const swapValues =(a,b) => {
    [a,b] =[b,a];
    return [a,b];
}