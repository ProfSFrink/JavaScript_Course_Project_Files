// Advanced Software and Web Developer Diploma
// Course #6 - JavaScript Project 8: String Methods
// by Steven Partlow

// Assignment #44 - Concat Method
function assign44() { // Define function 'assign44
    var book_name_1 = "The Twice-Dead King:"; // Define variable 'book_name_1' with an inital value
    var book_name_space = " " // Define variable 'book_name_space' with an inital value
    var book_name_2 = "Ruin" // Define variable 'book_name_2' with an inital value
    document.getElementById("Concatenated_String").innerHTML = book_name_1.concat(book_name_space, book_name_2); // // Use the built in string method 'concat()' on variable 'book_name_1' to concatenate with both 'book_name_space' and 'book_name_2' then assign the value of variable 'book_name' to ID 'Concatenated_String'
} // End Function 'Assign44' 

// Assignment #45 - Slice Method
function assign45() { // Define function 'assign45'
    var Game_Name = "Xenoblade Chronicles 3"; // Define variable 'Game_Name' with an inital value
    document.getElementById("Sliced_Text").innerHTML = Game_Name.slice(10, 20);  // // Run built in string method off string object 'Game_Name' to slice 'Chronicles' (The numbers are index positions and slice everything up to but NOT including the last position so you need to go one past it) then assign the value of 'Slice_Section' to ID 'Sliced_Text'
} // End Function 'Assign45'

// Challenge #10 - toUpperCase and Search Methods
function challenge10() { // Define function 'challenge10'
    var Book = "The Book of Martyrs"; // Define variable 'Book' with an inital value
    document.getElementById("Uppercase_Text").innerHTML = Book.toUpperCase(); // Will take the value of 'Book' convert to ALL uppercase and store it in ID 'Uppercase_Text' (NOTE: As strings in JavaScript are immutable the original string 'Book' will be unchanged and still the same case, we are converting it and storing the result in a different place)
    document.getElementById("Search").innerHTML = "The word 'Book' starts at index position " + Book.search("Book"); // Will run the search method off the 'Book' string object which will search the string for the word 'Book' and then output the index position where it starts in the string
} // End Function 'Challenge10'

// Assignment #46 - toString Method
function assign46() { // Define function 'assign46'
    var Number = 687294; // Declare variable 'Number' with an inital value
    document.getElementById("Num_to_String").innerHTML = Number.toString() + " is now a string!"; // Through use of the built in method 'toString' which we will run off the Number object convert the integer value 'Nummber' to a string value ond store the result in ID 'Num_to_String'
} // End Function 'Assign46'

// Assignment #47 - toPrecision Method
function assign47() { // Define function 'assign 47'
    var Big_Number = 84.3568; // Define variable 'Big_Number' with an inital value
    document.getElementById("Precision").innerHTML = Big_Number.toPrecision(3); // Run method 'toPrecision' off object 'Big_Number' and round it to 3 digits long and assign the result to ID 'Precision'
} // End of Function 'Assign47'