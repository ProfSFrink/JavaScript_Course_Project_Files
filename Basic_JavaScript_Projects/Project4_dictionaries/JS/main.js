// Advanced Software and Web Developer Diploma
// Course #6 - JavaScript Project 4: Dictionaries
// by Steven Partlow

// Assignment #24 - Dictionaries

function assign24() { // Define function 'assign24'
    var Game = { // Declare a dictionary 'Game' with five KVPs
        Name: "Live A Live", // Game name
        Developer: "Square Enix", // Game Developer
        Genre: "Japanese RPG", // Game Genre
        Platform: "Nintendo Switch", // Game Platform
        Release: 2022 // Game Release Year
    }; // End of 'GAME' object
    document.getElementById("Dictionary").innerHTML = Game.Name; // Store the value at key 'Game.Name' in id 'Dictionary'
} // End of FUNCTION

// Challenge #24 - Duplicate Keys

function challenge5() { // Define function 'challenge5'
    var Game = { // Declare a dictionary 'Game' with five KVPs
        Name: "Fire Emblem: Three Hops", // Game Name
        Name: "Omega Force", // Actually Game Developer but for the purpose of this challenge we name it 'Name' a duplicate key
        Genre: "Action Game", // Game Genre
        Platform: "Nintendo Switch", // Game Platform
        Release: 2022 // Game Release Year
    }; // End of 'GAME' object
    document.getElementById("Duplicate").innerHTML = Game.Name; // Store the value in 'Game.Name' in id 'Duplicate'. THIS WILL NOT WORK AS WE HAVE A DUPLICATE KEY 'Name'

    // NOTE: When a dictionary has two keys with the same name, JS will return the second defined value with that key as when we define a value to that key the second time, we overwrite the first definition
} // End of FUNCTION
