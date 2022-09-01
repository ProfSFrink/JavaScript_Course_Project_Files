// Advanced Software and Web Developer Diploma
// Course #6 JavaScript: Final Assignment - Personal Portfolio Website - JavaScript Update (JavaScript)
// Started: 01/09/2022 Finished:
// by Steven Partlow

function showForm() { // Define FUNCTION 'showForm'
    document.getElementById("Contact_Me").style.display = "block";
} // End of FUNCTION 'showForm'

function hideForm() { // Define FUNCTION 'hideForm'
    document.getElementById("Contact_Me").style.display = "none";
}  // End of FUNCTION 'hideForm'


document.addEventListener("click", function(event){

    if (event.target.matches(".Close_Button") || !event.target.closest(".Contact_Form_Container") && !event.target.closest(".Sticky_Contact_Button") && !event.target.closest(".contact")){
        hideForm()
    }
}, false )