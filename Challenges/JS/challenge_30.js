// Advanced Software and Web Developer Diploma
// Course #6 - JavaScript - Challenges
// Challenge #30 - Form Validation
// by Steven Partlow

function challenge30() { // Define function 'challenge30'
    // Pulls the current value of the 'Phone Number' input from the web site
    let p_num = document.forms["Challenge_30"]["phone_number"].value;

    // If 'p_num' is empty pop an alert informing the user
    if (p_num == "") {
        alert("Phone number field must be filled out");
        return false;
    } // End IF
} // End of FUNCTION 'challenge30'