// Advanced Software and Web Developer Diploma
// Course #6 - JavaScript Project / Project # 1 - Tic Tac Toe Game
// by Steven Partlow

//This variable keeps track of who's turn it is.
let activePlayer = 'X';
// This array stores an array of moves. We use this determine win conditions.
let selectedSquares = [];

// This function is for placing an x or o on a square.
function placeXOrO(squareNumber) {
    // This condition ensures a square hasn't been selected already.
    // The .some() method is used to check each element of selectedSquare array to
    // see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        // This variable retrieves the html element id that was clicked
        let select = document.getElementById(squareNumber);
        // This condition check who's turn it is.
        if (activePlayer === 'X') {
            // If activePlayer is equal to 'X', the x.png is in HTML
            select.style.backgroundImage = 'url("images/x.png")';
        // Active player may only be 'X' or 'O' so, if not 'X' it must be 'O'
        } else {
            // if activePlayer is equal to 'O', the o.png is placed in HTML.
            select.style.backgroundImage = 'url("images/o.png")';
        }
        // squareNumber and activePlayer are concatenated together and added to array
        selectedSquares.push(squareNumber + activePlayer);
        // This calls a function to check for any win conditions.
        checkWinConditions();
        // This condition is for changing the active player.
        if (activePlayer === 'X') {
            // If active player is 'X' change it to 'O'.
            activePlayer = 'O';
        // If active player is anything other than 'X'.
        } else {
            // Change the activePlayer to 'X'.
            activePlayer = 'X';
        }

        // This function plays the placement sound.
        Audio('./media/place.mp3');
        // This condition check to see if it is computers turn
        if (activePlayer === 'O') {
            // This function disables clicking for computer choice.
            disableClick();
            // This function waits 1 second before placing the image
            // and enabling click.
            setTimeout(function () { computersTurn(); }, 1000);
        }
        // Returning true is needed for our computersTurn() function to work.
        return true;
    }

    // This function results in a random square being selected.
    function computersTurn() {
        // This boolean is needed for our while loop.
        let success = false;
        // This variable stores a random number between 0 and 8.
        let pickASquare;
        // This condition allows our while loop to keep
        // trying if a square is selected already.
        while (!success) {
            // A random number between 0 and 8 is selected
            pickASquare = String(Math.floor(Math.random() * 9));
            // If the random number evaluates returns true, the square hasn't been picked.
            if (placeXOrO(pickASquare)) {
                // This line calls the function
                placeXOrO(pickASquare);
                // This changes our boolean and ends the loop.
                success = true;
            };
        }
    }

    // This function parases the selectedSquares array to search for win conditions.
    // drawWinLine function is called to draw line if condition is met.
    function checkWinConditions() {
        // X 0, 1, 2 Condition
        if      (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100); }
        // X 3, 4, 5 Condition
        else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304); }
        // X 6, 7, 8 Condition
        else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508); }
        // X 0, 3, 6 Condition
        else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558); }
        // X 1, 4, 7 Condition
        else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558); }
        // X 2, 5, 8 Condition
        else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558); }
        // X 6, 4, 2 Condition
        else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90); }
        // X 0, 4, 8 Condition
        else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520); }
        // O 0, 1, 2 Condition
        if      (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100); }
        // O 3, 4, 5 Condition
        else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304); }
        // O 6, 7, 8 Condition
        else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508); }
        // O 0, 3, 6 Condition
        else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558); }
        // O 1, 4, 7 Condition
        else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558); }
        // O 2, 5, 8 Condition
        else if (arrayIncludes('0O', '5O', '8O')) { drawWinLine(508, 50, 508, 558); }
        // O 6, 4, 2 Condition
        else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90); }
        // O 0, 4, 8 Condition
        else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520); }
        // This condition checks for tie. If none of the above conditions register
        // and 9 squares are selected, the code executes.
        else if (selectedSquares.length >= 9) {
            // This function plays the tie game sound.
            audio('./media/tie.mp3');
            // This function sets a .3 second timer before the resetGame is called.
            setTimeout(function () { resetGame(); }, 1000);
        }

        // This function checks if an array includes 3 strings.
        // It is used to check for each win condition.
        function arrayIncludes(squareA, squareB, squareC) {
            // The next 3 variables will be used to check for 3 in a row.
            const a = selectedSquares.includes(squareA);
            const b = selectedSquares.includes(squareB);
            const c = selectedSquares.includes(squareC);
            // If the 3 variables we pass are all included in our array true is
            // returned and our else if condition executes the drawWinLine function.
            if (a === true && b === true && c === true) { return true; }
        }
    }
}