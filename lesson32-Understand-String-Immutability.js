/*

In JavaScript, Stringvalues are immutable, which means that they cannot be altered once created.

For example, the following code:

var myStr = "Bob";
myStr[0] = "J";
cannot change the value of myStrto "Job", because the contents of myStrcannot be altered. Note that this does not mean that myStrcannot be changed, just that the individual characters of a string literal cannot be changed. The only way to change myStrwould be to assign it with a new string, like this:

var myStr = "Bob";
myStr = "Job";


Task:

Correct the assignment to myStr so it contains the string value of Hello World using the approach shown in the example above.

*/ 

// Setup
var myStr = "Jello World";

// Only change code below this line


//Individual charcters of the string are immuatble so remove this line 
myStr[0] = "H"; // Fix Me

//and code it to be this:
myStr = "Hello World";

