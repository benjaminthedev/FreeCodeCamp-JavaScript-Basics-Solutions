/*

Variables which are declared within a function, as well as the function parameters have local scope. That means, they are only visible within that function.

Here is a function myTestwith a local variable called loc.

function myTest() {
  var loc = "foo";
  console.log(loc);
}
myTest(); // logs "foo"
console.log(loc); // loc is not defined
locis not defined outside of the function.


Task:

Declare a local variable myVar inside myLocalScope. 
Run the tests and then follow the instructions commented out in the editor.


*/


function myLocalScope() {
    'use strict'; // you shouldn't need to edit this line
    var myVar = 10;
    console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope

//Remove this console.log below to pass!!!
console.log(myVar);

// Now remove the console log line to pass the test
