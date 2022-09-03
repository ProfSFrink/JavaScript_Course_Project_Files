// Advanced Software and Web Developer Diploma
// Course #6 JavaScript: Final Assignment - Personal Portfolio Website - JavaScript Update (JavaScript)
// Started: 01/09/2022 Finished:
// by Steven Partlow

// Pop-up Contact Form

// Shows the contact form when the user clicks the contact button
function showForm() { // Define FUNCTION 'showForm'
    document.getElementById("Contact_Me").style.display = "block";
} // End of FUNCTION 'showForm'

// Hide the contact form
function hideForm() { // Define FUNCTION 'hideForm'
    document.getElementById("Contact_Me").style.display = "none";
}  // End of FUNCTION 'hideForm'

// Hides the contact form when the close button is clicked or when the user click anywhere on the page expect within the contact form

document.addEventListener("click", function(event){

    if (event.target.matches(".Close_Button") || !event.target.closest(".Contact_Form_Container") && !event.target.closest(".Sticky_Contact_Button") && !event.target.closest(".contact")){
        hideForm()
    }
}, false )