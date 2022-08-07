// Advanced Software and Web Developer Diploma
// Course #6 - JavaScript Project
// by Steven Partlow

// Assignment #56 - Switch Statement
function assign56() { // Define function 'assign56'
    var Game_Output; // Define variable 'Game_Output'
    var Game = document.getElementById("Game_Input").value; // Set variable 'Game' to the current text entered in to input box with ID 'Game_Input'
    var Game_String = " is a great game!"; // Define variable 'Game_String' with a default value

    switch(Game) {
        case "Xenoblade Chronicles 3": // If 'Game' exactly matches 'Xenoblade Chronicles 3'
            Game_Output = "Xenoblade Chronicles 3" + Game_String; // Set 'Game_Output' to 'Xenoblade Chronicles 3' + 'Game_String'
        break; // Break out of the switch statement here
        
        case "Trials in the Sky": // If 'Game' exactly matches 'Trials in the Sky'
            Game_Output = "Trials in the Sky" + Game_String; // Set 'Game_Output' to 'Trials in the Sky' + 'Game_String'
        break; // Break out of the switch statement here
        
        case "Yakuza 3 Remastered": // If 'Game' exactly matches 'Yakuza 3 Remastered'
            Game_Output = "Yakuza 3 Remastered" + Game_String; // Set 'Game_Output' to 'Yakuza 3 Remastered' + 'Game_String'
        break; // Break out of the switch statement here

        case "Sonic Mania": // If 'Game' exactly matches 'Sonic Mania'
            Game_Output = "Sonic Mania" + Game_String; // Set 'Game_Output' to 'Sonic Mania' + 'Game_String'
        break; // Break out of the switch statement here

        case "The Gunk": // If 'Game' exactly matches 'The Gunk'
            Game_Output = "The Gunk" + Game_String; // Set 'Game_Output' to 'The Gunk' + 'Game_String'
        break; // Break out of the switch statement here
        
        default: // If none of the options entered match ask the user to try again.
            Game_Output = "Please enter a game exactly as is written on the above list.";
    } // End SWITCH
    document.getElementById("Output").innerHTML = Game_Output; // Set ID output to the current value of 'Game_Output'
} // End of function 'assign56'

// Assignment #57 - getElementsByClassName Method
function assign57() { // Define function 'assign57'
    var gameArray = document.getElementsByClassName("JRPG"); // Take all HTML elements of the class 'JRPG' and assign each of them to an element of the array 'gameArray'
    document.getElementById("Choice").innerHTML = gameArray[Math.floor(Math.random() * 6)].innerHTML; // We will randomly choose a number between zero and five and then using that number access the index position of array 'gameArray' and assign the value at that position to ID 'Choice'
} // End of function 'assign57'

// Assignment #58 - Canvas Element (HTML ONLY)

// Challenge #16 - Using JavaScript to draw in a Canvas Element
function challenge16() { // Define function 'challenge16'
    var myCanvas = document.getElementById("Challenge16"); // Assign the canvas element with ID 'Challenge16' to variable 'myCanvas'
    var c = myCanvas.getContext("2d"); // Define variable 'c' and assign it a version of 'MyCanvas' that is set to work with '2D' JavaScript drawing methods

    c.font = "80px Helvectica"; // Set the font for the canvas 'c' 80 pixel, Helvectica
    c.fillText("JavaScript drew this!", 40, 150); // Draw text "JavaScript drew this!" 40 across X axis and 150 pixel down the Y axis
} // End of function 'challenge16'

// Challenge #17 - createLinerGradiant() Method
function challenge17() { // Define function 'challenge17'
    var myCanvas = document.getElementById("Challenge17"); // Assign the canvas element with ID 'Challenge17' to variable 'myCanvas'
    var c = myCanvas.getContext("2d"); // Define variable 'c' and assign it a version of 'MyCanvas' that is set to work with '2D' JavaScript drawing methods
    
    // Create the effect of our gradient
    var gradiant = c.createLinearGradient(0, 0, 500, 0); // Use 'createLinearGradient' to create a gradient effect that will go all the way acros our canvas from left to right and assign it to variable 'gradient'
    gradiant.addColorStop(0, "navy"); // Start the gradient with a navy blue colour
    gradiant.addColorStop(1, "white"); // End the gradient with a white colour

    c.fillStyle = gradiant; // Assign the gradient we have created to our canvas 'c'
    c.fillRect(0, 0, 500, 300); // Apply the gradient starting at the top-left (0,0) and all the way to the bottom-right (500, 300)
} // End of function 'challenge17'