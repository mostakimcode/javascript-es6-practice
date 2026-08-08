/*
Function Name Must be: manageInventoryObject
A Warehouse System manages Product Stock based on Objects. Based on the Action Parameter, it retrieves keys/values/entries, deletes a property, or seals/freezes the object.

Input
manageInventoryObject(obj, action) — action can be: "keys" | "values" | "entries" | "delete:<propName>" | "seal" | "freeze"

Rules
"keys" → Returns Object.keys(obj)
"values" → Returns Object.values(obj)
"entries" → Returns Object.entries(obj)
"delete:propName" → Deletes propName and returns the new Object
"seal" → Returns Object.seal(obj) (New properties cannot be added)
"freeze" → Returns Object.freeze(obj) (No values can be changed)
*/








function manageInventoryObject(obj, action) {
    if (typeof obj === "object" && obj !== null && obj.constructor === Object && typeof action === "string") {
        if (action === "keys") {
            return Object.keys(obj);

        } else if (action === "values") {
            return Object.values(obj);

        } else if (action === "entries") {
            return Object.entries(obj);

        } else if (action.startsWith("delete:")) {
            const toKeyDelete = action.split(":")[1];
            let a = {
                ...obj
            }
            if(Object.hasOwn(a, toKeyDelete)){
                delete a[toKeyDelete];
                return a;
            } else {
                return "Invalid";
            }
        } else if (action === "seal") {
            return Object.seal(obj);

        } else if (action === "freeze") {
            return Object.freeze(obj);

        } else {
            return "Invalid";
        }
    } else {
        return "Invalid";
    }
}