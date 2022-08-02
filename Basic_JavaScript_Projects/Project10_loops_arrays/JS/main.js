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