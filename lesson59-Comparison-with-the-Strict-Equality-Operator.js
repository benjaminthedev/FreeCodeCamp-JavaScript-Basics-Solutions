//In this lesson FreeCodeCamp want you to learn about Comparison with the Strict Equality Operator

/*

Task:
Use the strict equality operator 
in the if statement so the function will return "Equal" when valis strictly equal to 7

*/

// Setup
function testStrict(val) {
    if (val === 7) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

// Change this value to test
testStrict(10);