/*
If statements are used to make decisions in code. The keyword iftells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as Booleanconditions and they may only be trueor false.

When the condition evaluates to true, the program executes the statement inside the curly braces. When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.

Pseudocode

if (condition is true) {
  statement is executed
}
Example

function test (myCondition) {
  if (myCondition) {
     return "It was true";
  }
  return "It was false";
}
test(true); // returns "It was true"
test(false); // returns "It was false"
When testis called with a value of true, the ifstatement evaluates myConditionto see if it is trueor not. Since it is true, the function returns "It was true". When we call testwith a value of false, myConditionis not trueand the statement in the curly braces is not executed and the function returns "It was false".


Create an if statement inside the function to return "Yes, that was true" if the parameter wasThatTrueis trueand return "No, that was false"otherwise.


*/


// Example
function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

    // Only change code below this line.

    if(wasThatTrue){
        return "Yes, that was true";
    }
    return "No, that was false"

    // Only change code above this line.

}

// Change this value to test
trueOrFalse