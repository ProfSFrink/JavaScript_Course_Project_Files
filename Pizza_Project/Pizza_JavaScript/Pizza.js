// Advanced Software and Web Developer Diploma
// Course #6 - JavaScript Project / Project #2 - Pizza Menu Project
// by Steven Partlow

function getReceipt() { // Define function 'getReceipt'
    // This initializes our string so it can get passed from
    // function to function, growing line by line into a full recepipt

    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;

    // Checks the size buttons on the web page and stores which one has been clicked by the user into an array, each element represents a different pizza size
    var sizeArray = document.getElementsByClassName("size");
    // We iterate through the size array
    for (var i = 0; i < sizeArray.length; i++) {
        // And check if the user selected it
        if (sizeArray[i].checked) {
            // If they did select the current size we assign that to 'selectedSize'
            var selectedSize = sizeArray[i].value;
            // We add it to our receipt string
            text1 = text1 + selectedSize + "<br>";
        } // End IF
    } // End FOR loop

    // We then adjust the value of 'sizeTotal' depening on the size of pizza the use chose
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } // End IF
    else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } // End ELSE IF
    else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } // End ELSE IF
    else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } // End ELSE IF
    else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    } // End ELE IF

    // Adjust the running total
    runningTotal = sizeTotal;
    // Log our calculations to the developer console so we can track what is happening in case of bugs  
    console.log(selectedSize + " = $" + sizeTotal + ".00"); 
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    // these variables will get on to each function
    getTopping(runningTotal, text1);

}; // End of function 'getReceipt'

function getTopping(runningTotal, text1) { // Define function 'getTopping' with two parameters 'runningTotal' and 'text1'
    var toppingTotal = 0;
    var selectedTopping = [];
    // Checks the toppings check boxes on the web page to see which ones the user selected
    var toppingArray = document.getElementsByClassName("toppings");
    // Iterate through the check boxes
    for (var j = 0; j < toppingArray.length; j++) {
        // If the user has selected a topping
        if (toppingArray[j].checked) {
            // We add that topping to the selected toppings array
            selectedTopping.push(toppingArray[j].value);
            // Output that selction to the console
            console.log("select topping item: ("+toppingArray[j].value+")");
            // Then add it to our receipt
            text1 = text1 + toppingArray[j].value + "<br>";
        } // End IF
    } // End FOR

    var toppingCount = selectedTopping.length;
    // The user gets one topping for free, this is were we check if they have at least one and deduct it from the total
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1); 
    } // End IF
    else {
        toppingTotal = 0;
    } // End ELSE

    // We add the number of toppings to the running total
    runningTotal = (runningTotal + toppingTotal);
    // Log our calculations to the developer console so we can track what is happening in case of bugs
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    // We output the list of items the user has purchased to the browser window
    document.getElementById("showText").innerHTML = text1;
    // We output the cost of the order to the browser window
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";

}; // End of function 'getTopping'