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

// Assignment #45
function assign45() { // Define function 'assign45'
    var Game_Name = "Xenoblade Chronicles 3"; // Define variable 'Game_Name' with an inital value
    document.getElementById("Sliced_Text").innerHTML = Game_Name.slice(10, 20);  // // Run built in string method off string object 'Game_Name' to slice 'Chronicles' (The numbers are index positions and slice everything up to but NOT including the last position so you need to go one past it) then assign the value of 'Slice_Section' to ID 'Sliced_Text'
} // End Function 'Assign45'