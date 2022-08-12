// Advanced Software and Web Developer Diploma
// Course #6 - JavaScript Project / Project # 2 - Calculator
// by Steven Partlow

// Define object 'Calculator' to keep track of values.
const Calculator = {
    // this displays 0 on the screen.
    Display_Value: '0',
    // This will hold the first operand for any expressions, we set it to null for now.
    First_Operand: null,
    // This checks whether or not the second operand has been input.
    Wait_Second_Operand: false,
    // This will hold the operator, we set it to null for now.
    operator: null,
}; // End of object 'Calculator'

// This modifies values each time a button is clicked.
function Input_Digit(digit) { // Define function 'Input_Digit'
    const { Display_Value, Wait_Second_Operand } = Calculator;
    // We are checking to see if Wait_Second_Operand is true and set
    // Display_Value to the key that was clicked.
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit; // Set Display_Value to the value that was passed in
        Calculator.Wait_Second_Operand = false;
    } // End IF
    else
    {
        // This overwrites Display_Value if the current value is 0
        // otherwise it adds onto it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    } // End ELSE
} // End of function 'Input_Digit'

// This section handles decimal points.
function Input_Decimal(dot) {
    // This ensures that accidental clicking of the decimal point
    // doesn't cause bugs in your operation
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        // We are saying that if the Display_Value does not contain a decimal point
        // we want to add a decimal point
        Calculator.Display_Value += dot;
    } // End IF
} // End Function 'Input_Decimal'

// This section handles operators
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator
    // When an operator key is pressed, we convert the current number
    // displayed on the screen to a number and then store the result in
    // Calculator.First_Operand if it doesn't already exist
    const Value_of_Input = parseFloat(Display_Value);
    // Checks if an operator already exists and if Wait_Second_Operand is true,
    // then updates the operator and exits from the function
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    } // End IF

    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } // End IF
    else if (operator) { // Checks if an operator already exists
        const Value_Now = First_Operand || 0;
        // If operator exists, property lookup is performed for the operator
        // in the Perform_Calculation object and the function that the
        // operator is executed
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        // Here we add a fixed amount of number after the decimal
        result = Number(result).toFixed(9)
        // This will remove any trailing 0's
        result = (result * 1).toString()
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    } // End ELSE IF
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
} // End of FUNCTION 'Handle_Operator'

const Perform_Calculation = {
    // Define a series of simple functions to handle operatios for us
    
    // Performs Division
    '/' : (First_Operand, Second_Operand) => First_Operand / Second_Operand,

    // Performs Subtraction
    '*' : (First_Operand, Second_Operand) => First_Operand * Second_Operand,

    // Performs Addition
    '+' : (First_Operand, Second_Operand) => First_Operand + Second_Operand,

    // Performs Subtraction
    '-' : (First_Operand, Second_Operand) => First_Operand - Second_Operand,

    // Returns current value of Second_Operand when we press equals
    '=' : (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() { // Define function 'Calculator_Reset'
    // This function resets the calculator
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
} // End of FUNCTION Calculator_Reset

// This functions updates the screen with the contents of Display_Value
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
} // End of FUNCTION 'Update_Display'

Update_Display();

// This section monitors button clicks

// This will query which key as was pressed first and stop
const keys = document.querySelector('.calculator-keys');

// We check that a button has actually been clicked
keys.addEventListener('click', (event) => {
    // the target variable is an object that represents the element that was clicked
    const { target } = event; // We assign that button to 'target'
    // If the element that was clicked on is not a button, exit the function
    if (!target.matches('button')) {
        return;
    } // End IF

    // We run a series of conditional checks to see what type of button was pressed by the user

    // If the element that was clicked on is an operator button
    if (target.classList.contains('operator')) {
        // Execute Handle_Operator and pass in the operator pressed
        Handle_Operator(target.value);
        // Update the calculator display
        Update_Display();
        // Exit the Event Listener
        return;
    } // End IF

    // If the element that was clicked on is the equal button
    if (target.classList.contains('decimal')) {
        // Execute Input_Decimal and pass in the value
        Input_Decimal(target.value);
        // Update the calculator display
        Update_Display();
        // Exit the Event Listener
        return;
    } // End IF

    // Ensures the AC clears the numbers from the Calculator
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    } // End IF

    // After all the checks are done we update the display
    Input_Digit(target.value);
    Update_Display();
}) // End of Event Listener