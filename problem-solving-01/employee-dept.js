/*
Task 5: getEmployeeDept(employee) — Nested Destructuring 
Given { name, job: { title, department } }, return { title, department } using nested destructuring.

Input:  
{ name: "Nadia", job: { title: "PM", department: "Product" } }

Output: 
{ title: "PM", department: "Product" }
*/

const getEmployeeDept = (employee) => {
    const {
        job:{
            title,
            department
            }
        } = employee;
    return {title, department};
}