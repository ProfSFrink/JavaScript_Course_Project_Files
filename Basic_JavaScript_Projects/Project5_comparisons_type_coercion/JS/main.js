// Advanced Software and Web Developer Diploma
// Course #6 - JavaScript Project 5: Comparisons Type Coercion
// by Steven Partlow

// Assignment # 26 - Typeof Operator
document.write("<b>Assignment #26 - Typeof Operator</b><br><br>");

// Declare variable 'test_string' with value 'string'
// Declare variable 'test_number' with value 843568
// Declare variable 'test_boolean' with value false
var test_string = 'string'; test_number = 843568; test_boolean = false; 

// Show the date type of variable 'test_string'
document.write("The variable 'test_string' is of data type ");
document.write("<b>" + typeof test_string + "</b><br>");

// Show the date type of variable 'test_number'
document.write("The variable 'test_number' is of data type ");
document.write("<b>" + typeof test_number + "</b><br>");

// Show the date type of variable 'test_boolean'
document.write("The variable 'test_string' is of data type ");
document.write("<b>" + typeof test_boolean + "</b><br><br>");

// Challenge #6 - Not A Number
document.write("<b>Challenge #6 - Not A Number</b><br><br>");

// Declare variable 'not_a_number' and attempt to divide 0 by 0 which will result in NaN
// Declare varuable 'some_text' with a default value
var not_a_number = 0 / 0; some_text = isNaN('Hi my name is Steven'); a_value = isNaN(56);
document.write("<b>1) </b>0 divided by 0 results in " + "<b>" + not_a_number + "</b><br>"); // Attempt to output the value of 'not_a_number'
document.write("<b>2) </b>Is variable <b>'some_text'</b> \(\"Hi my name is Steven\"\) NOT a number " + "<b>(" + some_text + ")</b><br>"); // Check if the value of 'some_text' is a number
document.write("<b>3) </b>Is variable <b>'a_value'</b> \(56) NOT a number " + "<b>(" + a_value + ")</b><br>"); // Check if the value of 'a_value' is a number

// Assignment #27 - Displaying Infinity
function assign27_infinity_plus(x) { // Define function 'assign27_infinity_plus' with one parameters 
    document.getElementById("Plus Infinity").innerHTML = "You cannot display it as it is higher than the maximum positive floating point number that JavaScript can display, so instead we output: " + "<b>" + x + "</b>"; // Inform the user we cannot display the number as it is higher than the maximum FP number that JS can handle
}

function assign27_infinity_neg(x) { // Define function 'assign27_infinity_plus' with one parameters 
    document.getElementById("Negative Infinity").innerHTML = "You cannot display it as it is higher than the maximum negative floating point number that JavaScript can display, so instead we output: " + "<b>" + x + "</b>"; // Inform the user we cannot display the number as it is higher than the maximum FP number that JS can handle
}

// Assignment #28 - Boolean Logic
function assign28() { // Define function 'assign28'
    document.getElementById("Is it true").innerHTML = (84 >= 35); // Evaulate if 84 is greater or equal to 35 and store the result in id 'Is it true'
    document.getElementById("Is it false").innerHTML = (84 < 35); // Evaulate if 84 is less than 35 and store the result in id 'Is it flase'
}

// Assignment #29 - console.log() Method
console.log(2 ** 8) // Calculate 2 to the power 0f 8 and output the result to the console within devtools

// Assignment #30 - Type Coercion
function assign30() { // Define function 'assign30()'
    document.getElementById("Type Coercion").innerHTML = ("5395" + 87); // Test type coercion by adding string "5395" to number 87 and store the result in id 'Type Coercion'
}

// Challenge #7 - Boolean Logic in the Console
console.log(26 > 25) // Evaulate if 26 is greater than 25 and output the result to the console

// Assignment #31 - Double Equals Sign
function assign31() { // Define function 'assign31'
    document.getElementById("Equals True").innerHTML = ((5 * 6) == 30); // Evaluate if (5*6) is equal to 30 and store the result in id 'Equals True'
    document.getElementById("Equals False").innerHTML = ((25-6) == 20); // Evalute if (25-6) is equal to 20 and store the result in id 'Equals False'
}

// Asssignment #32 Triple Equals Sign
function assign32() { // Define function 'assign32'

    // 32.1 - Same data type and value
    var age_1 = 42; age_2 = 42; // Define two variables, both number with a value of 42
    document.getElementById("Check 1").innerHTML  = (age_1 === age_2); // Check if 'age_1' are both the same data type and value of 'age_2', store result in id 'Check 1' (true)

    // 32.2 - Different data type and value
    var name = "Steven"; age = 42; // Define two variables, a string equals "Steven" and a number equals 42
    document.getElementById("Check 2").innerHTML = (name === age); // Check if 'name' and 'age' are both the same data type and value, store result in id 'Check 2' (false)

    // 32.3 - Different data type but same value
    var phone_num = 125689; var phone_str = "125689"; // Define two variables, a number and a string both with the same value
    document.getElementById("Check 3").innerHTML = (phone_num === phone_str); // Check if 'phone_num' and 'phone_str' are both the same data type and value, store the result in id 'Check 3' (false)

    // 32.4 - Same data type but different value
    var name_1 = "Steven"; name_2 = "Chris"; // Define two variables, both strings but with different values
    document.getElementById("Check 4").innerHTML = (name_1 === name_2); // Check if 'name_1' and 'name_2' are both the same data type and value, store the result in id 'Check 4' (false)
}