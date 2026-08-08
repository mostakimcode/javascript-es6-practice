/*
Function Name Must be: generateReceipt
A POS System for a Grocery Shop prints a Multi-line Receipt after every Purchase. You need to generate this Receipt using Template Literals.

Input
The Function will accept three parameters — customerName (String), items (Array of String), total (Number)

Output / Rules
Must return a Multi-line String using Template Literals (backticks)
Format exactly:
Receipt for <customerName>
Items: <item1, item2, ...>
Total: ৳<total>
*/




function generateReceipt(customerName, items, total){
    if(Array.isArray(items)){
        for(let item of items){
            if( typeof item !== "string" || item.trim() === ""){
                return "Invalid";
            }
        }
    } else {
        return "Invalid";
    }
    if(typeof customerName === "string" && typeof total === "number" && customerName.length > 0 && items.length >0 && Number.isFinite(total) && total >= 0 && customerName.trim() !== ""){
        return `Receipt for ${customerName}\nItems: ${items.join(", ")}\nTotal: ৳${total}`;
    } else {
        return "Invalid";
    }
}