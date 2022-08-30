// Advanced Software and Web Developer Diploma
// Course #6 - JavaScript - ToDo App
// by Steven Partlow

// Get current date and time
const d = new Date(); // Get the current date and time
document.getElementById("date").innerHTML = d;

// This function gets the task from input
function get_todos() { // Define function 'get_todos'
    console.log("Running get_todos");
    // This creates an array of tasks that are inputted
    var todos = new Array;
    console.log("todos_array =" + todos);
    // This pulls the task list that was saved in the web browser memory
    var todos_str = localStorage.getItem('todo');
    console.log("todos_str =" + todos_str)
    // If the input is not null then JSON.parse will communicate with the web browser to make the task a JavaScript object
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
        console.log("todos_array = " + todos);
    } // End IF
    return todos;
} // End of FUNCTION 'get_todos'

// This function adds the inputted task to the get_todos function array
function add() { //Define function 'add'
    console.log("Running add");
    // This takes the inputed task and creates a variable of it
    var task = document.getElementById('task').value;
    console.log("task = " + task);

    var todos = get_todos();
    console.log("todos_array = " + todos);
    // This adds a new task to the end of the array
    todos.push(task);
    console.log("todos_array = " + todos);
    // This converts the task input to a JSON string
    localStorage.setItem('todo', JSON.stringify(todos));
    // Clear the add task input
    document.getElementById("task").value = "";
    // Update the display task list in the browser window
    show();

    return false;
} // End of FUNCTION 'add'

// This function give us the ability to remove and item from the todo list
function remove() { // Define function 'remove'
    console.log("Running remove");

    var id = this.getAttribute('id');
    console.log("ID = " + id);

    var todos = get_todos();
    console.log("todos_array = " + todos);

    todos.splice(id, 1);
    console.log("todos_array = " + todos);

    localStorage.setItem('todo', JSON.stringify(todos));
    // This looks in the show() to display a removed item from the screen
    show();

    return false;
} // End of FUNCTION 'remove'

// This function keeps the tasks permanetly displayed on the screen
function show() { // Define function 'show'
    console.log("Running show");
    // This sets the task that was retrieved as a variable
    var todos = get_todos();
    console.log("todos_array = " + todos);

    // This sets up each task as an unordered list
    var html = '<ul>';
    // This displays a task to the list in the order that it is inputed
    for (var i = 0; i < todos.length; i++) {
        // This also displays the task as a list and creates a button with the "x" also updates the 
        html += '<li>' + todos[i] + '<button class = "remove" id = "' + i + '">x</button></li>';
    }; // End FOR

    html += '</ul>';
    console.log("HTML = " + html);
    // This displays the task as a list
    document.getElementById('todos').innerHTML = html;

    // This tells the browser how to display the todo array after an item has been removed
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
        console.log(buttons[i]);
    } // End FOR

} // End of FUNCTION 'show' 

// This displays the inputed task when the 'Add Item' button is clicked
document.getElementById('add').addEventListener('click', add);
// This will keep the inputs displayed permantaly on the screen
show();