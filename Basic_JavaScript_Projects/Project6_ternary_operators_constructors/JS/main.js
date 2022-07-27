// Advanced Software and Web Developer Diploma
// Course #6 - JavaScript Project 6: Ternary Operators Constructors
// by Steven Partlow

// Assignment #35 - Tenerary Operators
function Ride_function() { // Define function 'Ride_function'
    var Height, Can_ride; // Define two variables 'Height' and 'Can_ride'
    Height = document.getElementById("Height").value; // Assign the value of HTML id "Height" to JS variable "Height"
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough"; // Make use of the ternary operator '?' to check if the value of variable 'Height' is less than 52, if it is assign 'Can_ride' to 'You are too short' and if 'Height' is greater than 51 'You are tall enough'
    document.getElementById("Ride").innerHTML = Can_ride + " to ride"; // Concatenate a string by adding Can_ride' with the string "to ride" and assign to HTML id 'Ride'
}

// Challenge #8 - Voting Program
function challenge8() { // Define function 'challenge8'
    var Age, Can_Vote; // Define two variables 'Age' and 'Vote'
    Age = document.getElementById("Age").value; // Assign the value of HTML id "Age" to JS variable 'Age'
    Can_Vote = (Age >= 18) ? "You can vote!" : "You are not old enough to vote!"; // Make use of the ternary operator '?' to check if value of variable 'Age' is greater or equal to 18, if it is assign 'Can_Vote' to "You can vote!" if is not then assign 'Can_Vote' to "You are not old enough to vote!"
    document.getElementById("Vote").innerHTML = Can_Vote; // Assign the value of 'Can_Vote' to HTML id 'Vote'
}

// Assignment #36 - Object Constructors

// Vehicle object constructor
function Vehicle(Make, Model, Year, Colour) { // Define function 'Vehicle' which acts as a constructor for object 'Vehicle' with four parameters 'Make', 'Model', 'Year', and 'Colour'
    this.Vehicle_Make = Make; // Assign value of parameter 'Make' to object property 'Vehicle_Make'
    this.Vehicle_Model = Model; // Assign value of parameter 'Model' to object property 'Vehicle_Model'
    this.Vehicle_Year = Year; // Assign value of parameter 'Year' to object property 'Vehicle_Year'
    this.Vehicle_Colour = Colour; // Assign value of parameter 'Colour' to object property 'Vehicle_Colour'
}

// Define three instances of a Vehicle object using the provided parameters
var Steven = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emma = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Chris = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function assign36() { // Define function 'assign36'
    // Concatenate this string to the id 'Keywords_and_Constructors' using the 'Chris' instance of the Vehicle object
    document.getElementById("Keywords_and_Constructors").innerHTML = "Chris drives a " + Chris.Vehicle_Colour + "-Coloured " + Chris.Vehicle_Model + " manufactured in " + Chris.Vehicle_Year; 
}