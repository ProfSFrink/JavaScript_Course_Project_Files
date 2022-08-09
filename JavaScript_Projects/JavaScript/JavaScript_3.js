// Advanced Software and Web Developer Diploma
// Course #6 - JavaScript Project
// by Steven Partlow

// Assignment #59 - HTML Data Attribute
function assign59(game) { // Define function 'assign59' with one parameter 'game' which is a HTML element
    var gameType = game.getAttribute("data-genre-type"); // Takes the data- value off the 'game' HTML object we have passed in and assigns it to variable 'gameType'

    alert(game.innerHTML + " is a " + gameType + " game!"); // Pop an alert window telling the user the name of 'game' element passed in along with it 'data- value
} // End of Function 'assign59'
