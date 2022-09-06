// Advanced Software and Web Developer Diploma
// Course #6 JavaScript: Final Assignment - Personal Portfolio Website - JavaScript Update (JavaScript)
// Started: 01/09/2022 Finished: 06/09/2022
// by Steven Partlow

// POP-UP COTACT FORM

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

    if (event.target.matches(".Close_Button") || !event.target.closest(".Contact_Form_Container") && !event.target.closest(".Sticky_Contact_Button") && !event.target.closest(".contact-link")){
        hideForm()
    }
}, false )

// IMAGE SLIDESHOW

var slideIndex = 1; // Variable which tracks which image is currently selected, default to 1 (First image)
showSlides(slideIndex); // Execute function showSlides and pass in 'slideIndex'

function plusSlides(n) { // Define function 'plusSlides'
    showSlides(slideIndex += n); // This function act as the controls for the 'Next' and 'Prev' buttons
} // End function 'plusSlides'

function currentSlide(n) { // Define function 'currentSlide'
    showSlides(slideIndex = n); // Current thumbnail image controls
 } // End function 'currentSlide'

 function showSlides(n) { // Define function 'showSlides

    // Objects defined with 'let' cannot be redeclared
    var i; // Define variable 'i' for use in our for loops
    var slides = document.getElementsByClassName("mySlides"); // Set 'slides' to number of instances of class 'mySlides'
    var dots = document.getElementsByClassName("dot"); // Set 'dots' to current number of instances class 'dot'
    
    if (n > slides.length) {slideIndex = 1} // If the value of 'n' is greater than the length of 'slides' set 'slideIndex' to 1 (In other words go back to the first image after going right from the third one)

    if (n < 1) {slideIndex = slides.length} // If 'n' is less than the length of 'slider' set 'slideIndex' to it's length (In other words got to the last image after going left from the first one)

    for (i = 0; i < slides.length; i++) { // Iterate through all of the slides one by one and hide them in the browser window
        slides[i].style.display = "none"; // This hides the corresponding element in the browser window
    } // End FOR

    for (i = 0; i < slides.length; i++) { // Iterate through all of the slides one by one and remove the name 'active' from the class name
        dots[i].className = dots[i].className.replace(" active", ""); // Remove the class name 'active' from any element that contains it
    } // End FOR

    slides[slideIndex-1].style.display = "block"; // Set the display of the current element to 'block' so it will take up an entire line in the browser window
    dots[slideIndex-1].className += " active"; // Add the class name 'active' to the current elements list of class names
 } // End function 'showSlides'