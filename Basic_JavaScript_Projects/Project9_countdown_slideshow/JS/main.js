// Advanced Software and Web Developer Diploma
// Course #6 - JavaScript Project 9: Countdown / Slideshow
// by Steven Partlow

// Assignment #48 - Countdown Timer
function assign48() { // Define function'assign48'
    var seconds = document.getElementById("seconds").value; // Declare variable 'seconds' and set it's inital value to the value assign to ID 'seconds'

    function tick() { // Define function 'tick'
        seconds = seconds - 1; // Subtract 1 from seconds
        timer.innerHTML = seconds; // Set ID 'timer' to value of variable 'seconds'
        setTimeout(tick, 1000); // Pause the program for 1000 milliseconds (1 second)
        if (seconds == -1) { // If 'seconds' is less than 0
            alert("Times up!");
        } // End IF
    } // End function 'tick'

    tick(); // Execute function 'tick'
} // End function 'assign48'

// Challenge #12 - SLideshow
let slideIndex = 1; // Variable which tracks which image is currently selected, default to 1
showSlides(slideIndex); // Execute function showSlides and pass in 'slideIndex'

function plusSLides(n) { // Define function 'plusSlides'
    showSlides(slideIndex += n); // This function act as the controls for the 'Next' and 'Prev' buttons
} // End function 'plusSlides'

function currentSlide(n) { // Define function 'currentSlide'
    showSlides(slideIndex = n); // Current thumbnail image controls
 } // End function 'currentSlide'

 function showSlides(n) { // Define function 'showSlides

    // Objects defined with 'let' cannot be redeclared
    let i; // Define variable 'i' for use in our for loops
    let slides = document.getElementsByClassName("mySlides"); // Set 'slides' to number of instances of class 'mySlides'
    let dots = document.getElementsByClassName("dot"); // Set 'dots' to current number of instances class 'dot'
    if (n > slides.length) {slideIndex = 1} // If the value of 'n' is greater than the length of 'slides' set 'slideIndex' to 1 (In other words go back to the first image after going right from the third one)
    if (n < 1) {slideIndex = slides.length} // If 'n' is less than the length of 'slider' set 'slideIndex' to it's length (In other words got to the last image after going left from the first one)

    for (i = 0; i < slides.length; i++) { // Start a for loop, counting from zero to the length of 'slides' increment i by 1 each iteration
        slides[i].style.display = "none"; // This hides the corresponding element in the browser window
    } // End FOR

    for (i = 0; i < slides.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); // Replaces the corresponding elements class name from 'active' to ''
    } // End FOR

    slides[slideIndex-1].style.display = "block"; // Set the display of the current element to 'block' so it will take up an entire line in the browser window
    dots[slideIndex-1].className += " active"; // Add the class name 'active' to the current elements list of class names
 } // End function 'showSlides'