// Advanced Software and Web Developer Diploma
// Course #6 - JavaScript Project 10: Loops / Arrays
// by Steven Partlow

// Assignment #50 - While Loops
function assign50() { // Define function 'assign50'
    var Output = ""; // Declare variable 'Output'
    var X = 1 // Declare variable 'X' this will be our counter starting at 1

    while (X <= 12 ) { // While X is less or euqal to 12 do the following:
        Output += "<br>" + + X + " power of 2 = " + X**2; // Set 'Output' to start a new line then output the current value of X to the power of 2
        X++; // Increment 'X' by 1
    } // End WHILE loop

    document.getElementById("Loop").innerHTML = Output; // Assign the current value of 'Output' to ID 'Loop'
} // End of function 'assign50'

// Challenge #13 - String Length Property
function challenge13() { // Define function 'Challenge13'
    var How_Long_Am_I = "Live A Live is a remake of a previously Japan-only 1994 J-RPG which was released for the Super Famicom"; // Declare variable 'How_Long_Am_I' with an inital value

    document.getElementById("Length").innerHTML = "The string is " + How_Long_Am_I.length + " characters long"; // Using the '.length()' method will work out how many characters long 'How_long_Am_I' and output the result to ID 'Length'
} // End of function 'Challenge 13'

// Assignment #51 - For Loops
function assign51() { // Define function 'assign51'
    var Games_Playing = ["Live A Live (NS)", "Xenoblade Chronicles 3 (NS)", "Citizen Sleeper - DLC1 (PC XGP)", "The Gunk (PC XGP)", "Total War: Warhammer III (PC STEAM)"]; // Define array 'Games_Playing' which consists of five strings with inital values
    var Content = ""; // Define variable 'Content' this will be a string with all the games names concatenated together with a line break in between each
    var G; // Define variable 'G', this is the counter for our for loop

    for (G =0; G < Games_Playing.length; G++) { // Execute a FOR loop which iterates through array 'Games_Playing' starting at index 0 until 1 before the end of the array (This is correct as because of indexing we want to iterate through positions 0 to 4 and then stop or we would get an error as there is no index 5)
        Content += Games_Playing[G] + "<br>"; // Set variable 'Content' to the current value of 'Content' and concatenate the value of array 'Games_Playing[G]' plus a line break to it
    } // End FOR loop
    document.getElementById("Games").innerHTML = Content; // Set HTML ID 'Games' to value of variable 'Content'
} // End of function 'assign51'

// Assignment #52 - Arrays
function assign52() { // Define function 'assign52'
    var Play_Next = []; // Define an empty array 'Play_Next'

    // Add five elements from index 0 to 4 to the 'Play_Next' array
    Play_Next[0] = "Phantom Brave: The Hermuda Trianlge Remastered (NS)";
    Play_Next[1] = "The Legend of Heroes: Trails in the Sky (PC STEAM)";
    Play_Next[2] = "Yakuza 3 Remastered (PS4)";
    Play_Next[3] = "Sonic Mania (NS)";
    Play_Next[4] = "Xenoblade Chronicles: Definitive Edition - Future Connected (NS)";

    // Generate a random number between zero and four and use it to pull the corresponding element from array 'Play_Next' then assign that element to ID 'Next'
    document.getElementById("Next").innerHTML = Play_Next[Math.floor((Math.random() * 5))];
} // End of function 'assign52'

// Assignment #53 - Const Keyword
function assign53() { // Define 'assign53'
    
    // Const object creation
    const Video_Game = {name: "The Legend of Heroes: Trails of Cold Steel", developer: "Nihon Falcom", genre: "J-RPG", price: "£25"}; // Define const 'Video_Game' object with four properties 'name', 'developer', 'genre', and 'price'
    document.getElementById("Constant").innerHTML = "The game " + Video_Game.name + " is developed by " + Video_Game.developer + " and is a game in the " + Video_Game.genre + " genre"; // Concatenate a string using some of the properties of the above 'Video_Game' object then store the resulting string in ID 'Constant'

    // Const obkect updated
    Video_Game.platform = "Playstation 4"; // Add a new property 'Platform' to the 'Video_Game' object an give it an inital value
    Video_Game.genre = "Action RPG"; // Change the property "genre"
    document.getElementById("Updated_Constant").innerHTML = "The game " + Video_Game.name + " is developed by " + Video_Game.developer + " and is a game in the " + Video_Game.genre + " genre and is available on the " + Video_Game.platform + " platform."; // Concatenate a string using some of the properties of the above 'Video_Game' object then store the resulting string in ID 'Updated_Constant'
} // End of function 'assign53'

// Assignment #54 - Let Keyword
function assign54() { // Define function 'assign54'
    document.write("Clicking on the button will show how the let and var keywords differ. The middle string is assigned using the let keyword in it's own block of code and can only be accessed from within that block. When we try to access the same variable again outside the block we access the first version again as that has global scope whereas the let version does not." + "<br><br>");

    var Scope = "VAR Declaration: I can be accessed anywhere in the function!"; // Define variable 'Scope' with inital value

    document.write(Scope);
   
    { // Start a code block
        let Scope = "LET Declaration: I can only be accessed from within the set of curly brackets!"
        document.write("<br>" + Scope); // Do a line-break then take the value of variable 'Scope' and assign it to ID 'Scope'
    } // End this code block

    document.write("<br>" + Scope); // Do a line-break then take the value of variable 'Scope' and assign it to ID 'Scope'
} // End of function 'assign54'

// Challenge #14 - Return Statement
function challenge14(x, y) { // Define function 'challenge 14' with two parameters 'x' and 'y' 
    return x ** y; // Return 'x' to the power of 'y'
} // End of function 'challenge14'

document.getElementById("Return").innerHTML = "4 to the power of 16 is " + challenge14(4,16); // Execute function 'challenge14' pass in parameters 4 and 16 and store the value the function returns to ID 'Return'

// Assignment #55 - Objects

let product = { // Define object 'Product' this is example of something that appears in our stock system at work
    name: "Pepsi MAX Cherry", // Product name
    manufacturer: "Pepsi", // Product manufacturer
    size: "2 Litre", // Product size
    type: "Soft Drink", // Product type
    price: "£1.50", // Product price
    barcode: "4060800166531", // Product barcode (This is unique to the product and act as it primary key in our database)
    stock: 44, // Product current stock level
    notes: function() { // Define 'notes' function, creates a string using the objects properties, which acts as a description of the product
        return "This product is " + this.name + " is made by the " + this.manufacturer + " company " + " and comes in a size of " + this.size + " is a " + this.type + " and costs " + this.price;
    } // End of 'notes' function
} // End of definition for 'product' object
document.getElementById("Object").innerHTML = product.notes(); // Execute the 'notes' function off the 'product' object, store the result in returns in ID 'Object'