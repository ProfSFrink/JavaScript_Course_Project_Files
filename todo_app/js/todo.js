// Advanced Software and Web Developer Diploma
// Course #6 - JavaScript - ToDo App
// by Steven Partlow

// Get current date and time
const d = new Date(); // Get the current date and time
document.getElementById("date").innerHTML = d;

// This function gets the task from input
function get_todos() { // Define function 'get_todos'
    // This creates an array of tasks that are inputted
    var todos = new Array;
    // This pulls the task list that was saved in the web browser memory
    var todos_str = localStorage.getItem('todo');
    // If the input is not null then JSON.parse will communicate with the web browser to make the task a JavaScript object
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    } // End IF
    return todos;
} // End of FUNCTION 'get_todos'

// This function adds the inputted task to the get_todos function array
function add() { //Define function 'add'
    // This takes the inputed task and creates a variable of it
    var task = document.getElementById('task').value;

    var todos = get_todos();
    // This adds a new task to the end of the array
    todos.push(task);
    // This converts the task input to a JSON string
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    // Update the display task list in the browser window
    show();

    return false;
} // End of FUNCTION 'add'

// This function keeps the tasks permanetly displayed on the screen
function show() { // Define function 'show'
    // This sets the task that was retrieved as a variable
    var todos = get_todos();

    // This sets up each task as an unordered list
    var html = '<ul>';
    // This displays a task to the list in the order that it is inputed
    for (var i = 0; i < todos.length; i++) {
        // This also displays the task as a list and creates a button with the "x"
        html += '<li>' + todos[i] + '<button class = "remove" id = "' + i + '">x</button></li>';

    }; // End FOR
    html += '</ul>';
    // This displays the task as a list
    document.getElementById('todos').innerHTML = html;

} // End of FUNCTION 'show' 

// This displays the inputed task when the 'Add Item' button is clicked
document.getElementById('add').addEventListener('click', add);
// This will keep the inputs displayed permantaly on the screen
show();