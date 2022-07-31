// Advanced Software and Web Developer Diploma
// Course #6 - JavaScript Project 8: String Methods
// by Steven Partlow

// Assignment #44 - Concat Method
function assign44() { // Define function 'assign44
    var book_name_1 = "The Twice-Dead King:"; // Define variable 'book_name_1' with an inital value
    var book_name_space = " " // Define variable 'book_name_space' with an inital value
    var book_name_2 = "Ruin" // Define variable 'book_name_2' with an inital value
    var book_name = book_name_1.concat(book_name_space, book_name_2); // Use the built in string method 'concat()' on variable 'book_name_1' to concatenate with both 'book_name_space' and 'book_name_2'
    document.getElementById("Concatenated_String").innerHTML = book_name; // Assign the value of variable 'book_name' to ID 'Concatenated_String'
    console.log(book_name);
} // End Function 'Assign44' 

// Assignment #45