//In this lesson FreeCodeCamp want you to do the following: Passing Values to Functions with Arguments

/*

Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or "passed") into a function when it is called are known as arguments.

Here is a function with two parameters, param1and param2:

function testFun(param1, param2) {
  console.log(param1, param2);
}
Then we can call testFun:

testFun("Hello", "World");

We have passed two arguments, "Hello"and "World". Inside the function, param1will equal "Hello" and param2will equal "World". Note that you could call testFunagain with different arguments and the parameters would take on the value of the new arguments.

Task:
Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
Call the function with two numbers as arguments.

*/

// Example
function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}
ourFunctionWithArgs(10, 5); // Outputs 5

// Only change code below this line.

function functionWithArgs(a, b){
    console.log(a + b)
}

functionWithArgs(10, 5);