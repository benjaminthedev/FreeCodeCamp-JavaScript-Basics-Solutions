//Comparisons with the Logical Or Operator
/*
Task:

Combine the two if statements into one statement which returns 
"Outside" if val is not between 10 and 20, inclusive. Otherwise, return "Inside".



*/


function testLogicalOr(val) {
    // Only change code below this line

    if (val < 10 || val > 20) {
        return "Outside";
    }    

    // Only change code above this line
    return "Inside";
}

// Change this value to test
testLogicalOr(15);