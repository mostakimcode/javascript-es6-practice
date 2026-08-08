/*
Function Name Must be: calculateBMI
Refactor an old ES5 function from a Fitness App into an Arrow Function. The function will take Weight (kg) and Height (m) to calculate BMI.

Input
The Arrow Function will accept two parameters — weight (Number, kg), height (Number, m)

Output / Rules
BMI = weight / (height × height)
Must return BMI as a Number, up to 2 Decimal Places (toFixed(2), then Convert to Number)
*/






const calculateBMI = (weight, height) => {
    let BMI = 0;
    if (typeof weight === "number" && typeof height === "number" && Number.isFinite(weight) && Number.isFinite(height) && weight > 0 && height > 0) {
        BMI = weight / height ** 2;
        return Number(BMI.toFixed(2));
    } else {
        return "Invalid";
    }
}

// console.log(calculateBMI(70, 1.759))