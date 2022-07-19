// Advanced Software and Web Developer Diploma
// Course #6 - JavaScript
// by Steven Partlow

// Assignment # 13
function assign13() { // Define function assign13
    var Date_Is = ("The date is "); var current_Date = Date(); // Define two variables - Date_Is) The string 'The date is' and current_Date) Create a Date object with current date and time
    document.getElementById("DateIs").innerHTML = Date_Is + current_Date; // Concatenate Date_Is and current_Date and store them in the id 'DateIs'
}