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
function assign27_infinity_plus(x) { // Define function 'assign27_infinity_plus' 
    document.getElementById("Plus Infinity").innerHTML = "You cannot display it as it is higher than the maximum positive floating point number that JavaScript can display, so instead we output: " + "<b>" + x + "</b>"; // Inform the user we cannot display the number as it is higher than the maximum FP number that JS can handle
}

function assign27_infinity_neg(x) { // Define function 'assign27_infinity_plus' 
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