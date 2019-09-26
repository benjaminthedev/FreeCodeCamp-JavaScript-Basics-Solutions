// Assignment with a Returned Value

//Task: Call the processArg function with an argument of 7 and assign its return value to the variable processed.

// Example
var changed = 0;

function change(num) {
    return (num + 5) / 3;
}

changed = change(10);

// Setup
var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

// Only change code below this line

processed = processArg(7);