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
function assign18_Multiply(a, b) { // Define function 'assign18_Multiply' and have two parameters 'a' and 'b' to pass in
    document.getElementById("Multiply").innerHTML = a * b; // Calculate a * b and assign the result to 'Multiply' id  
}

// Assignment #18 - Division
function assign18_Division(a ,b) { // Define function 'assign18_Divison' and have two parameters 'a' and 'b' to pass in
    document.getElementById("Division").innerHTML = a / b; // Calculate a / b and assign the result to 'Division' id
}

// Assignment #19 Multiple Operations
function assign19(a, b, c, d) { // Define function 'assign19' and have four parameters 'a, b, c, and d'
    result = (a + b) * c / d - 2; // Calculate (a+b) * c / d - 2
    document.getElementById("Multiple_Operators").innerHTML = result; // and assign the result to 'Multiple_Operators' id
}

// Assignment #20 Modulus Operator
function assign20(x ,y) { // Define function 'assign20' and have two parameters 'x, and y'
    document.getElementById("Modulus").innerHTML = x % y; // Calculate the remainder of 'x dividied by y' and store the result in id 'Modulus'
}

// Assignment #21 Negation Operator
function assign21(n) { // Define function 'assign21' and have one parameters 'x'
    document.getElementById("Negation").innerHTML = -n; // Negate 'n' and store the result in id 'Negation'
}

// Assignment #22 Increment and Decrement Operators

var i = 1; d = 10; // Declare two variables 'i' = 1 and 'd' = 10

// 22.a - Increment Operator
function assign22_increment() { // Define function 'assign22'
    document.getElementById("Increment").innerHTML = i++; // Increment 'i' by 1 every time function executes
}

// 22-b - Decrement Operator
function assign22_decrement() { // Define function 'assign22'
    document.getElementById("Decrement").innerHTML = d--; // Decrement 'd' by 1 every time function executes
}

// Assignment # 23 Math.random() Function
function assign23(r) { // Define function assign23 with one parameter 'r' 
    document.getElementById("Random").innerHTML = (Math.random() * 55); // Generate a random number between 0 and the value of 'r' and store the result in id 'Random'
}