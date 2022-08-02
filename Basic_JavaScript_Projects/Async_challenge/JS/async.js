// Advanced Software and Web Developer Diploma
// Course #6 - JavaScript - Async Challenge
// by Steven Partlow

// Without the 'async' attribute within the HTML code this will not work as the code is being executed before we define ID 'p1' in our HTML code, adding the 'async' attribute to the <script> tag fixes this issue
alert(document.getElementById("p1").innerHTML); 