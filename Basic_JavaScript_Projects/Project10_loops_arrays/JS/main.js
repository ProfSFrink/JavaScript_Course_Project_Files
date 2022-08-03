// Advanced Software and Web Developer Diploma
// Course #6 - JavaScript Project 10: Loops / Arrays
// by Steven Partlow

// Assignment #50 - While Loops
function assign50() { // Define function 'assign50'
    var Output = ""; // Declare variable 'Output'
    var X = 1 // Declare variable 'X' this will be our counter starting at 1

    while (X <= 12 ) { // While X is less or euqal to 12 do the following:
        Output += "<br>" + + X + " power of 2 = " + X**2; // Set 'Output' to start a new line then output the current value of X to the power of 2
        X++; // Increment 'X' by 1
    } // End WHILE loop

    document.getElementById("Loop").innerHTML = Output; // Assign the current value of 'Output' to ID 'Loop'
} // End of function 'assign50'

// Challenge #13 - String Length Property
function challenge13() { // Define function 'Challenge13'
    var How_Long_Am_I = "Live A Live is a remake of a previously Japan-only 1994 J-RPG which was released for the Super Famicom"; // Declare variable 'How_Long_Am_I' with an inital value

    document.getElementById("Length").innerHTML = "The string is " + How_Long_Am_I.length + " characters long"; // Using the '.length()' method will work out how many characters long 'How_long_Am_I' and output the result to ID 'Length'
} // End of function 'Challenge 13'

// Assignment #51 - For Loops
function assign51() { // Define function 'assign51'
    var Games_Playing = ["Live A Live (NS)", "Xenoblade Chronicles 3 (NS)", "Citizen Sleeper - DLC1 (PC XGP)", "The Gunk (PC XGP)", "Total War: Warhammer III (PC STEAM)"]; // Define array 'Games_Playing' which consists of five strings with inital values
    var Content = ""; // Define variable 'Content' this will be a string with all the games names concatenated together with a line break in between each
    var G; // Define variable 'G', this is the counter for our for loop

    for (G =0; G < Games_Playing.length; G++) { // Execute a FOR loop which iterates through array 'Games_Playing' starting at index 0 until 1 before the end of the array (This is correct as because of indexing we want to iterate through positions 0 to 4 and then stop or we would get an error as there is no index 5)
        Content += Games_Playing[G] + "<br>"; // Set variable 'Content' to the current value of 'Content' and concatenate the value of array 'Games_Playing[G]' plus a line break to it
    } // End FOR loop
    document.getElementById("Games").innerHTML = Content; // Set HTML ID 'Games' to value of variable 'Content'
} // End of function 'assign51'

// Assignment #52 - Arrays
function assign52() { // Define function 'assign52'
    var Play_Next = []; // Define an empty array 'Play_Next'

    // Add five elements from index 0 to 4 to the 'Play_Next' array
    Play_Next[0] = "Phantom Brave: The Hermuda Trianlge Remastered (NS)";
    Play_Next[1] = "The Legend of Heroes: Trails in the Sky (PC STEAM)";
    Play_Next[2] = "Yakuza 3 Remastered (PS4)";
    Play_Next[3] = "Sonic Mania (NS)";
    Play_Next[4] = "Xenoblade Chronicles: Definitive Edition - Future Connected (NS)";

    // Generate a random number between zero and four and use it to pull the corresponding element from array 'Play_Next' then assign that element to ID 'Next'
    document.getElementById("Next").innerHTML = Play_Next[Math.floor((Math.random() * 5))];
} // End of function 'assign52'