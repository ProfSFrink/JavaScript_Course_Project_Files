// Advanced Software and Web Developer Diploma - Part VI - JavaScript Course
// One-Page Website Assignment - JavaScript Update
// by Steven Partlow

// Open the Modal
function openModal() { // Define function 'openModal'
    document.getElementById("myModal").style.display = "block";
} // End of Function 'openModal'

// Close the Modal
function closeModal() { // Define function 'openModal'
    document.getElementById("myModal").style.display = "none";
} // End of Function 'closeModal'

var slideIndex = 1;
showSlides(slideIndex);

// Next previous controls
function plusSlides(n) { // Define function 'plusSlides'
    showSlides(slideIndex += n);
} // End of Function 'plusSlides'

// Thumbnail image controls
function currentSlide(n) { // Define function 'currentSlide'
    showSlides(slideIndex = n);
} // End of Function 'currentSlide'

function showSlides(n) { // Define function ' showSlides'
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");

    if (n > slides.length) {slideIndex = 1};
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i <slides.length; i++) {
        slides[i].style.display = "none";
    } // End FOR

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots [i].className.replace(" active", "");
    } // End FOR
    
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
} // End of Function 'showSlides'