// Advanced Software and Web Developer Diploma
// Course #6 - JavaScript Project 9: Countdown Slideshow
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