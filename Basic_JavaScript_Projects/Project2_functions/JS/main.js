// Advanced Software and Web Developer Diploma
// Course #6 - JavaScript
// by Steven Partlow

// Assignment # 13
function assign13() { // Define function assign13
    var Date_Is = ("The date is "); var current_Date = Date(); // Define two variables - Date_Is) The string 'The date is' and current_Date) Create a Date object with current date and time
    document.getElementById("DateIs").innerHTML = Date_Is + current_Date; // Concatenate Date_Is and current_Date and store them in the id 'DateIs'
}

// Assignment # 14
function assign14() { // Define function assign14
    var about = "Hello, My name is Steven"; // Assign this string to 'about'
    about += " and I am a Software Developer in Training with The Tech Academy"; // Add the following on to the end of the string'about'
    document.getElementById("concatenate").innerHTML = about; // Assign the varaible 'about' to the element id 'concatenate'
}

// Challenge # 3
function challenge3(x, y) { // Define function challenge3
    document.getElementById("Answer").innerHTML = x * y; // Calculate the sum of 2 * 4 and store the result in the id 'Answer'
}