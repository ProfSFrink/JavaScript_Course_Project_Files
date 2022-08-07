_// Advanced Software and Web Developer Diploma
// Course #6 - JavaScript Project
// by Steven Partlow

function challenge18() { // Define function 'challenge18'
    // Define variables that we can then use for form validation

    var fname = document.forms["contact"]["first_name"].value; // Assign the value of form 'contact' input 'first_name' to variable 'fname'
    var sname = document.forms["contact"]["surname"].value; // Assign the value of form 'contact' input 'surname' to variable 'sname'
    var email = document.forms["contact"]["email"].value; // Assign the value of form 'contact' input 'email' to variable 'email'

    if (fname == "" || fname == "Enter your first name") { // Check if 'fname' contains nothing or the default value then if it contains either
        alert("You have not entered a first name"); // Pop an alert prompt informing the user that they need to enter a first name
        return false;
    } // End IF

    else if (sname == "" || sname == "Enter your second name") { // Check if 'sname' contains nothing or the default value then if it contains either
        alert("You have not entered a surname"); // Pop an alert prompt informing the user that they need to enter a surname
        return false;
    } // End ELSE IF

    else if (email == "" || email == "Enter your email address") { // Check if 'email' contains nothing or the default value then if it contains either
        alert("You have not entered an email address"); // Pop an alert prompt informing the user they need to enter an email address
        return false;
    } // End ELSE IF
} // End of function 'challenge18'