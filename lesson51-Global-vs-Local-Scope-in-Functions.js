//In this lesson FreeCodeCamp wants you to understand Global vs. Local Scope in Functions

/*

It is possible to have both local and global variables with the same name. When you do this, the localvariable takes precedence over the globalvariable.

In this example:

var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}
The function myFunwill return "Head"because the localversion of the variable is present.

Task:

Add a local variable to myOutfit function to override the value of outerWear with "sweater".

*/

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
    // Only change code below this line
    var outerWear = "sweater";


    // Only change code above this line
    return outerWear;
}

myOutfit();