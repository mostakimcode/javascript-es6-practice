/*
Function Name Must be: describeDeclaration
A Coding Academy is building a small Quiz Tool to explain the differences between var, let, and const to new students. The Tool will take a keyword as input and describe whether it can be Redeclared and Reassigned using that keyword.

Input
The Function will accept one parameter — keyword (String): "var" / "let" / "const"

Rules
"var" → Returns "Can redeclare, can reassign"
"let" → Returns "Cannot redeclare, can reassign"
"const" → Returns "Cannot redeclare, cannot reassign"
*/



function describeDeclaration(variable){

    if(variable === "var"){
        return  "Can redeclare, can reassign";
    } else if(variable === "const"){
        return "Cannot redeclare, cannot reassign";
    } else if(variable === "let"){
        return "Cannot redeclare, can reassign";
    } else {
        return "Invalid";
    }
}