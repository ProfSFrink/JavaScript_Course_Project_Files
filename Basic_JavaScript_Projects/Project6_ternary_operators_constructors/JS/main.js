// Advanced Software and Web Developer Diploma
// Course #6 - JavaScript Project 6: Ternary Operators Constructors
// by Steven Partlow

// Assignment #35 - Tenerary Operators
function Ride_function() { // Define function 'Ride_function'
    var Height, Can_ride; // Define two variables 'Height' and 'Can_ride'
    Height = document.getElementById("Height").value; // Assign the value of HTML id "Height" to JS variable "Height"
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough"; // Make use of the ternary operator '?' to check if the value of variable 'Height' is less than 52, if it is assign Can_ride to 'You are too short' and if 'Height' is greater than 51 'You are tall enough'
    document.getElementById("Ride").innerHTML = Can_ride + " to ride"; // Concatenate a string by adding Can_ride' with the string "to ride" and assign to HTML id 'Ride'
}