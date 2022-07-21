// Advanced Software and Web Developer Diploma
// Course #6 - JavaScript Project 3: Math Operators
// by Steven Partlow

// Assignment #16
function assign16() { // Define function 'assign16'
    var x = 5; y = 6; // Declare two variables x and y and assign them each a value
    document.getElementById("Math").innerHTML = x + y; // Calculate the sum of x + y and store the result in the id 'Math'
}

// Assignment #17
function assign17(a, b) { // Define function 'assign17' and have two parameters 'a' and 'b' to pass in
    document.getElementById("Subtraction").innerHTML = a - b; // Calculate a - b and assign the result to the 'Subtraction' id 
}

// Assignment #18 - Multiplication
function assign18_Multiply(a, b) { // Define 'assign18_Multiply' and have two parameters 'a' and 'b' to pass in
    document.getElementById("Multiply").innerHTML = a * b; // Calculate a * b and assign the result to 'Multiply' id  
}

// Assignment #18 - Division
function assign18_Division(a ,b) { // Define 'assign18_Divison' and have two parameters 'a' and 'b' to pass in
    document.getElementById("Division").innerHTML = a / b; // Calculate a / b and assign the result to 'Division' id
}