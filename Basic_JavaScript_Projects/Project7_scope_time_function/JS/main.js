// Advanced Software and Web Developer Diploma
// Course #6 - JavaScript Project 7: Scope / Time Function
// by Steven Partlow

// Assignment #39 - Scope

// 39.1 - Global and Local variable
var num_1 = 128; // Declare GLOBAL variable 'num_1' with inital value 128

function assign39_scope() { // Define function 'assign39_scope'
    var num_2 = 512; // Declare LOCAL variable 'num_2' with inital value 512
    
    document.write("<b>Assignment #39 - Scope</b><br><br>"); // Print this string in bold followed by three line breaks
    document.write("<b>39.1 - Global variable</b><br>") // Print this string in bold followed by a line break
    document.write("128 to the power of 4 is: " + (num_1 ** 4) + "<br><br>"); // Use GLOBAL variable 'num_1' and calculate it to the power of 4
    document.write("<b>39.2 Local variable</b><br>") // Print his string in bold followed by a line break
    document.write("512 to the power of 4 is " + (num_2 ** 4) + "<br><br>"); // Use LOCAL variable 'num_2' and calculate it to the power of 4 
}

assign39_scope(); // Execute function 'assign39_scope'

// 39.3 - Local variable error
console.log(num_2 ** 4); // Gives an error in the developer console 'Uncaught ReferenceError: num_2 is not defined at main.js:23:13' this is because we are attempting to make use of the local variable 'num_2' which can onlt be used by function 'assign39_scope' as this is declare within that function so can only be used by it.
