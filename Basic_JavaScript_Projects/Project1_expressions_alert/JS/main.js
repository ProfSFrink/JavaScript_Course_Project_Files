/* Advanced Software and Web Developer Diploma */
/* Course #6 - JavaScript */
/* by Steven Partlow */

/* Assignment #4 */
window.alert('Hello, World!"<br>"'); /* Display an alert with the text 'Hello, World!' */

/* Assignment #5 */
document.write('<br>'); /* Add a line-break in the browser window */
document.write('Hello, world!"<br>'); /* Write the text 'Hello, world!' in the browser window */

/* Assignment #6 */
document.write("<br>"); /* Add a line-break in the browser window */
var my_String = ('Hello, My name is Steven and this is for Assignment #6"<br>'); /* Assign this text to 'my_String' */
document.write(my_String); /* Display 'my_String' in the browser window */

/* Assignment #7 */
var alert_String = ('Hello, This is the contents of variable \'alert_string\' being displayed in an alert box.') /* Assign this text to 'alert_String' */
window.alert(alert_String); /* Display 'alert_String' in an alert window */

/* Assignment #8 */
document.write("<br>"); /* Add a line-break in the browser window */
var escape_String = ('This \"String\" quote uses an escape character to display correctly in the browser"<br>'); /* Assign this text to 'escape_String' NOTE: Use \ before characters to escape them so they display correctly */
document.write(escape_String); /* Display 'escape_String' in the browser window */

/* Assignment #9 */
document.write("<br>"); /* Add a line-break in the browser window */

/* Took a quote from Warhammer 40k by one of the characters and divided it into three string and then concatenate them together and also make use of escape characters again */
var string_1 = ("\"Why do I still live? What more do you want from me? I gave everything I had to you, to them. Look what they\'ve made of our dream.\""); /* Assign this text to 'string_1' */
var string_2 = ("This bloated, rotting carcass of an empire is driven not by reason and hope but by fear, hate and ignorance. Better that we had all burned in the fires of Horus' ambition than live to see this.\""); /* Assign this text to 'string_2' */
var string_3 = (" - Roboute Guiliiman<br>"); /* Assign this text to 'string_3' */
document.write(string_1 + string_2 + string_3); /* Concatenate the three string together */

/* Challenge #1 */
document.write("<br>"); /* Add a line-break in the browser window */
var concat_String = ('This is a \'Concatenated\' ' + 'string'); /* Concatenate these two string together as ' concat_String' */
document.writeln(concat_String + "<br>"); /* Display 'concat_String' in the browser window */

/* Assignment #10 */
document.write("<br>"); /* Add a line-break in the browser window */
var Ultramarines = 'Roboute Guilliman', BloodAngels = 'Sanguinius', ImperialFists = 'Rogal Dorn', SonsOfHorus = 'Horus', WorldEaters = 'Angron'; /* Declare five strings in one statement */
document.writeln(BloodAngels + "<br>"); /* Output the 'BloodAngels' string to the browser window */

/* Assignment #11 */
document.write("<br>"); /* Add a line-break in the browser window */
var Ultramarines = Ultramarines.fontcolor("blue"), BloodAngels = BloodAngels.fontcolor("red"), ImperialFists = ImperialFists.fontcolor("Yellow"), SonsOfHorus = SonsOfHorus.fontcolor("Black"), WorldEaters = WorldEaters.fontcolor("Crimson"); /* Assign colours to the five string variables from the prior assignment */
document.write(Ultramarines + '\\ ' + BloodAngels + '\\ ' + ImperialFists + '\\ ' + SonsOfHorus + '\\ ' + WorldEaters + "<br>"); /* Concatenate the five variables and make use of escape characters to display them */

/* Assignment #12 */
document.write("<br>"); /* Add a line-break in the browser window */
document.write(Math.pow(2,8) + "<br>"); /* Calulate 2 to the power of 8 then display the output in the browser window */