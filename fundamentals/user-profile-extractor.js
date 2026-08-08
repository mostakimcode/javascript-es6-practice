/*
Function Name Must be: extractUserInfo
A Social App's API returns a Nested User Object. Using Destructuring, extract Name, Age, and the First Item of the Hobby List from the nested data.

Input
extractUserInfo(userObj) — userObj = { user: { name, age }, hobbies: […] }

Output / Rules
Must use Object and Array Destructuring (including Default and Rename as needed)
Must return: "<name> (<age>) likes <firstHobby>"
If the hobbies Array is empty, default value for firstHobby should be "nothing yet"
*/



function extractUserInfo(userObj) {
    if (typeof userObj === "object" && userObj !== null && Object.hasOwn(userObj, "user") && Object.hasOwn(userObj, "hobbies") && typeof userObj.user === "object" && userObj.user !== null && Array.isArray(userObj.hobbies)) {
        const {
            user: { name: userName , age: userAge },
            hobbies
        } = userObj;

        const [firstHobby = "nothing yet"] = hobbies;

        for (let hobby of hobbies) {
            if (typeof hobby !== "string" || hobby.trim().length <= 0) {
                return "Invalid";
            }
        }
        if (typeof userName === "string" && userName.trim().length > 0 && typeof userAge === "number" && Number.isFinite(userAge) && userAge % 1 === 0 && userAge > 0) {
            return `${userName.trim()} (${userAge}) likes ${firstHobby}`
        } else {
            return "Invalid";
        }
    } else {
        return "Invalid";
    }
}



console.log(extractUserInfo({ user: { name: "ASfi", age: 22 }, hobbies: [""] }));