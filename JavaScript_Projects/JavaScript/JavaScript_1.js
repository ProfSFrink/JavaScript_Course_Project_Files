// Advanced Software and Web Developer Diploma
// Course #6 - JavaScript Switch Statment
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