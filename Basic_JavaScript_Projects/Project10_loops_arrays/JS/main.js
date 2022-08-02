// Advanced Software and Web Developer Diploma
// Course #6 - JavaScript Project 10: Loops / Arrays
// by Steven Partlow

// Assignment #50 - While Loops
function assign50() { // Define function 'assign50'
    var Output = ""; // Declare variable 'Output'
    var X = 1 // Declare variable 'X' this will be our counter starting at 1

    while (X <= 12 ) { // While X is less or euqal to 12 do the following:
        Output += "<br>" + + X + " power of 2 = " + X**2; // Set 'Output' to start a new line then output the current value of X to the power of 2
        X++; // Increment 'X' by 1
    } // End WHILE

    document.getElementById("Loop").innerHTML = Output; // Assign the current value of 'Output' to ID 'Loop'
} // End of function 'assign50'

// Challenge #13 - String Length Property
function challenge13() { // Define function 'Challenge13'
    var How_Long_Am_I = "Live A Live is a remake of a previously Japan-only 1994 J-RPG which was released for the Super Famicom"; // Declare variable 'How_Long_Am_I' with an inital value

    document.getElementById("Length").innerHTML = "The string is " + How_Long_Am_I.length + " characters long"; // Using the '.length()' method will work out how many characters long 'How_long_Am_I' and output the result to ID 'Length'
} // End of function 'Challenge 13'