//In this lesson FreeCodeCamp want you to learn about Comparison with the Strict Inequality Operator

/*

Task:

Add the strict inequality operator to the if
statement so the function will return "Not Equal" when valis not strictly equal to 17


*/



// Setup
function testStrictNotEqual(val) {
    // Only Change Code Below this Line

    if (val !== 17) {

        // Only Change Code Above this Line

        return "Not Equal";
    }
    return "Equal";
}

// Change this value to test
testStrictNotEqual(10);