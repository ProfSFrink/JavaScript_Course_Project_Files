// Advanced Software and Web Developer Diploma - Part VI - JavaScript Course
// One-Page Website Assignment - JavaScript Update
// by Steven Partlow

// Open the Modal
function openModal() { // Define function 'openModal'
    document.getElementById("myModal").style.display = "block"; // Make the modal visible
} // End of Function 'openModal'

// Close the Modal
function closeModal() { // Define function 'openModal'
    document.getElementById("myModal").style.display = "none"; // Make the modal disappear
} // End of Function 'closeModal'

var slideIndex = 1; // This variable tracks the current screenshot, we always default to the first one
showSlides(slideIndex); // Show the screenshot at the position matching the value of 'slideIndex'

// Next previous controls
function plusSlides(n) { // Define function 'plusSlides'
    showSlides(slideIndex += n); // Show the screenshot at the current value of 'slideIndex' plus one (the next image in the slides array)
} // End of Function 'plusSlides'

// Thumbnail image controls
function currentSlide(n) { // Define function 'currentSlide'
    showSlides(slideIndex = n); // Show the screenshot at the position matching the value of 'slideIndex'
} // End of Function 'currentSlide'

function showSlides(n) { // Define function ' showSlides' with parameter 'n' which is the current slide position
    var i; // Used for iteration in FOR loops
    var slides = document.getElementsByClassName("mySlides"); // Get all elements using class 'mySlides' (All of our screenshots) and place them in this array
    var dots = document.getElementsByClassName("demo"); // Get all the elements using class 'demo' (All of our thumbnail screenshots) and place them in this array
    var captionText = document.getElementById("caption"); // Get all the elements using ID 'caption' (All of the caption text for each screenshot) and place them in this array

    if (n > slides.length) {slideIndex = 1}; // If the current slide position is greater than the total number of slides then reset slide position back to the first one (Going from the end back to 1)
    if (n < 1) {slideIndex = slides.length} // If the current slide position is less than one then set slide position to the last slide in the array (Going from 1 back to the end)

    // This iterates through all the slides and make them invisiable by default
    for (i = 0; i <slides.length; i++) {
        slides[i].style.display = "none";
    } // End FOR

    // This iterates through all the slides and removes the active tag from each of there class names
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots [i].className.replace(" active", "");
    } // End FOR
    
    slides[slideIndex-1].style.display = "block"; // Set the current slide to be visiable (-1 is to account for indexing)
    dots[slideIndex-1].className += " active"; // Set the current slide class name to 'active' (-1 is to account for indexing)
    captionText.innerHTML = dots[slideIndex-1].alt; // // Set the caption text to match the alt tag of the current silde (-1 is to account for indexing)
} // End of Function 'showSlides'