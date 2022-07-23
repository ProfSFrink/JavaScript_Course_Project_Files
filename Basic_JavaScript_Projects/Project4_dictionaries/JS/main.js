// Advanced Software and Web Developer Diploma
// Course #6 - JavaScript Project 4: Dictionaries
// by Steven Partlow

// Assignment #24

function assign24() { // Define function 'assign24'
    var Game = { // Declare a dictionary game with five KVPs
        Name: "Live A Live", // Game name
        Developer: "Square Enix", // Game Developer
        Genre: "Japanese RPG", // Game Genre
        Platform: "Nintendo Switch", // Game Platform
        Release: 2022 // Game Release Year
    };
    document.getElementById("Dictionary").innerHTML = Game.Name; // Store the value at key Game in id 'Dictionary'
}
