/*
Function Name Must be: printObjectDetails
A Product Catalog System wants to display the same Object in three different ways using loops — for…in, for…of + Object.entries, and Object.entries + Array Destructuring.

Input
printObjectDetails(obj, loopType) — loopType: "forin" | "forofentries" | "entriesDestructure"

Rules
"forin" → Loops through each Key using for...in and returns an Array formatted as "<key>: <value>"
"forofentries" → Returns the same Format using for...of (Object.entries(obj))
"entriesDestructure" → Returns the same Format using Object.entries(obj).map with [key, value] Destructuring
*/



const printObjectDetails = (obj, loopType) => {
    if (typeof obj === "object" && obj !== null && obj.constructor === Object && typeof loopType === "string") {
        if (loopType === "forin") {
            const result = [];
            for (let key in obj) {
                result.push(`${key}: ${obj[key]}`);
            }
            return result;
        } else if (loopType === "forofentries") {
            let arr = Object.entries(obj);
            let final = [];
            for (let keyValue of arr) {
                final.push(`${keyValue[0]}: ${keyValue[1]}`);
            }
            return final
        } else if (loopType === "entriesDestructure") {
            
            return Object.entries(obj).map(([key, value]) => `${key}: ${Array.isArray(value) ? value.join(", ") : value}`)
            
        } else {
            return "Invalid";
        }
    } else {
        return "Invalid";
    }
}
