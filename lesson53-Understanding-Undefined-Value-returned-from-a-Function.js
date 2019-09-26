//In this lesson FreeCodeCamp want you to learn: Understanding Undefined Value returned from a Function

/*

A function can include the returnstatement but it does not have to. In the case that the function doesn't have a returnstatement, when you call it, the function processes the inner code but the returned value is undefined.

Example

var sum = 0;
function addSum(num) {
  sum = sum + num;
}
var returnedValue = addSum(3); // sum will be modified but returned value is undefined
addSum is a function without a returnstatement. The function will change the global sumvariable but the returned value of the function is undefined


Task:
Create a function addFive without any arguments. This function adds 5 to the sumvariable, but its returned value is undefined.

*/

// Example
var sum = 0;
function addThree() {
    sum = sum + 3;
}

// Only change code below this line

function addFive(){
    sum = sum + 5;
}

// Only change code above this line
var returnedValue = addFive();