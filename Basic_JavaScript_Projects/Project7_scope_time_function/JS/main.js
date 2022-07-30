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
    document.write("128 to the power of 4 is " + (num_1 ** 4) + "<br><br>"); // Use GLOBAL variable 'num_1' and calculate it to the power of 4
    document.write("<b>39.2 Local variable</b><br>") // Print his string in bold followed by a line break
    document.write("512 to the power of 4 is " + (num_2 ** 4) + "<br>"); // Use LOCAL variable 'num_2' and calculate it to the power of 4 
}

assign39_scope(); // Execute function 'assign39_scope'

// 39.3 - Local variable error
console.log(num_2 ** 4); // Gives an error in the developer console 'Uncaught ReferenceError: num_2 is not defined at main.js:23:13' this is because we are attempting to make use of the local variable 'num_2' which can onlt be used by function 'assign39_scope' as this is declare within that function so can only be used by it.

// Assignment #40 - Date Module
function assign40() { // Define function 'assign40'
    if (new Date().getHours() < 12) { // If it's before 12 noon set id 'Lunch' to 'It's morning'
        document.getElementById("Lunch").innerHTML = 
        "It's morning!";
    } // End IF
}

// Assignment #41 - IF Statements
function assign41() { // Define function 'assign41'
    var Coin = Math.floor(Math.random() * 2); // Declare variable 'Coin' and assign it a random value of either 0 or 1 (the Math.Random() method generates a random form zero up to but not including 2)
    if (Coin == 0) { // If 'Coin' is equal to zero set ID 'Coin' to heads
        document.getElementById("Coin").innerHTML = "The coin is heads!"; 
    } // End IF
    else { // Else 'Coin' must be equal to one so set ID 'Coin' to tails
        document.getElementById("Coin").innerHTML = "The coin is tails!";
    } // End ELSE
}

// Assignment #42 - ELSE Statements

// This function is an example of the 'Challenge 25' scheme we operate at work were we ID customers based on if the look over the age of 25 and ID them if they look younger then so there is no risk of serving someone who is under the age of 18

function assign42() { // Define function 'assign42'
    var Customer_Age; // Define variable 'Customer_Age'
    Customer_Age = document.getElementById("Challenge_25").value; // Assign the value of HTML id 'Challenge_25' to JS variable 'Customer_Age'
    if (Customer_Age >= 25) { // If the value of 'Customer_Age' is greater or equal to 25 then inform the user that yes you can serve them as the customer looks over the age of 25
        document.getElementById("Can_You_Serve_Them").innerHTML = "Yes, you can serve the customer!";
    } // End IF
    else { // Else they must look younger than 25 so you must ID them
        document.getElementById("Can_You_Serve_Them").innerHTML = "No, you must ID the customer first!";
    } // End ELSE
}

// Assignment #43 - ELSE IF Statements

function assign43() { // Define function 'assign43'
    var Time = new Date().getHours(); // Declare a new variable and assign the current hour of the day
    var Reply; // Declare variable 'Reply' which will be a string
    if (Time < 12 == Time > 0) { // If 'Time' is between zero and twelve then set reply to morning
        Reply = "It's morning time!"; 
    } // End IF
    else if (Time >= 12 == Time < 18) { // Else if 'Time' is greater than 12 and less than 18 set reply to afternoon 
        Reply = "It is the afternoon.";
    } // End ELSE IF
    else {
        Reply = "It is evening time."; // Else set 'Reply' to evening
    } // End ELSE
    document.getElementById("Time_of_Day").innerHTML = Reply; // Set ID 'Time_of_Day' to value of variable 'Reply'
}