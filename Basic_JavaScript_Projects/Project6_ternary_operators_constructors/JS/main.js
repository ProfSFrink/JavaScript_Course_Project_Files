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

// Define three instances of a 'Vehicle' object using the provided parameters
var Steven = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emma = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Chris = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function assign36() { // Define function 'assign36'
    // Concatenate this string to the id 'Keywords_and_Constructors' using the 'Chris' instance of the Vehicle object
    document.getElementById("Keywords_and_Constructors").innerHTML = "Chris drives a " + Chris.Vehicle_Colour + "-Coloured " + Chris.Vehicle_Model + " manufactured in " + Chris.Vehicle_Year; 
}

// Assignment #37 - New and This Keywords

// Define a new instance of the Vehivle object using the provided paraemters
var Pat = new Vehicle("Mazda", "CX-5", 2022, "Blue");

function assign37() { // Define function 'assign37'
    // Concatenate this to the id 'New_and_This' using the 'Pat' instance of the Vehicle object
    document.getElementById("New_and_This").innerHTML = "Pat owns a " + Pat.Vehicle_Make + " "+ Pat.Vehicle_Model + " made in the year " + Pat.Vehicle_Year + " ,which is the colour " + Pat.Vehicle_Colour;
}

// Challenge #9 - Reserved Keywords

// 9.1 - Attempt to use a reserved keyword
function challenge9_reserved_word() { // Define function 'challenge9_reserved_word'
    var reserved = "break"; // Attempt to define a variable with a variable name 'break' (A reserved word)
    document.getElementById("Reserved").innerHTML = reserved; // Assign the value of 'Reserved_Word' to the id 'Reserved'
}

// 9.2 - Game object constructor function
function Game(Name, Developer, Genre, Platform, Year) { // Define function 'Game' which acts as a constructor for object 'Game' with five parameters 'Name', 'Developer', 'Genre', 'Platform' and 'Year'
    this.Game_Name = Name; // Assign value of parameter 'Name' to object property 'Game_Name'
    this.Game_Developer = Developer; // Assign value of parameter 'Developer' to object property 'Game_Developer'
    this.Game_Genre = Genre; // Assign value of parameter 'Genre' to object property 'Game_Genre'
    this.Game_Platform = Platform; // Assign value of parameter 'Platform' to object property 'Game_Platform'
    this.Game_Year = Year; // Assign value of parameter 'Year' to object property 'Game_Year'
}

// Define an instance of the 'Game' object
var Live_A_Live = new Game("Live A Live", "Square Enix", "Japanese Role-Playing Game", "Nintendo Switch", 2022);

function challenge9_constructor() { // Define function 'challenge9_constructor'
    // Concatenate a string to the id 'Game_Object' using the 'Live_A_Live' instance of the object
    document.getElementById("Game_Object").innerHTML = "NAME: " + Live_A_Live.Game_Name + " DEVELOPER: " + Live_A_Live.Game_Developer + " GENRE: " + Live_A_Live.Game_Genre + " PLATFORM: " + Live_A_Live.Game_Platform + " YEAR: " + Live_A_Live.Game_Year;
 }

 // Assignment #38 - Nested Functions

 function assign38() { // Define function 'assign38' 
    document.getElementById("Nested_Function").innerHTML = PowerOf(); // Execute 'PowerOf' function and store the result it returns to id 'Nested_Function'
    
    function PowerOf() { // Define function 'PowerOf'
        var Starting_Value = 2; // Declare variable 'Starting_Value' and assign it the value of 2

        function Power_Eight() {Starting_Value = Starting_Value ** 8;} // Define function 'Power_Eight' which takes the value of 'Starting_Value' and calculate it to the power of 8, here the entire function is written as one line of code

        Power_Eight(); // Execute function 'Power_Eight'
        return Starting_Value; // function 'PowerOf' return the current value of 'Starting_Value'
    } // End of function 'PowerOf'
 } // End of function 'assign38'