/*
Function Name Must be: mergeInventory / highestScore
You need to merge two branch stock arrays using the Spread Operator for a shop, and find the highest score from a students' score array using spread.

Input
mergeInventory(arr1, arr2) — two Arrays; highestScore(scores) — a Number Array

Output / Rules
mergeInventory: Returns a Merged Array using the Spread Operator (...arr1, ...arr2)
highestScore: Returns the Highest Number using Math.max(...scores)
*/







const mergeInventory = (arr1, arr2) => {
    if(Array.isArray(arr1) && Array.isArray(arr2)){
        for(let elem1 of arr1){
            if(typeof elem1 !== "number" || !Number.isFinite(elem1)){
                return "Invalid";
            }
        }
        for( let elem2 of arr2){
            if( typeof elem2 !== "number" || !Number.isFinite(elem2)){
                return "Invalid";
            }
        }
        return [...arr1,...arr2]
    } else {
        return "Invalid";
    }
}


const highestScore = (scores) => {
    if(Array.isArray(scores) && scores.length >0){
        for(let score of scores){
            if(typeof score !== "number" || !Number.isFinite(score)){
                return "Invalid";
            }
        }
        return Math.max(...scores);
    } else {
        return "Invalid";
    }
}
