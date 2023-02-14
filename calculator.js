let displayString = "12345";
const userDisplay = document.getElementById('calc-display');

updateDisplay(displayString);



//Inputs: UI buttons, keyboard input
function inputHandler(userInput) {
    //User input should be a series of numbers delimited by operator symbols, probably a string

}

//Outputs: Text display
function updateDisplay(displayValue) {
    userDisplay.textContent = displayValue;
}

function clearDisplay() {
    updateDisplay("");
}

//User functionality/calls: 
function undo() {
    //Should remove a character from the current user input string and update display
    displayString = displayString.substring(0,displayString.length-1);
    updateDisplay(displayString);
}

function clear() {
    //Should remove all characters from  the current user input string and update display
    displayString = "";
    updateDisplay(displayString);
}

function calculate() { //Equals button calls this
    //Should process the current user input string

}



//Internals
function validateSubmission (userSubmission) {
    //Should evaluate the user's submission and reject inputs with invalid characters
    //fail with alert, clear UI?
    //Fails with:
    //empty Submission
    //single number submission
    //invalid characters
    //leading operator, trailing operator
    //
}

function formatSubmission(validatedSubmission) {
    //Should accept validated submission, create groups based on operational priority
    //Primary priority: mult & div
    //Secondary priority: left-to-right

    //Could use Array to store each item as a number obj or operator obj w/ val = the number/operator
    let userSubmission = [
        {
            number:value,
            operator:value
        },
        {
            number:value,
            operator:value
        },
        {
            number:value,
            operator:value
        },
    ];
}

function parseSubmission(formattedSubmission) {
    //Take submission formatted for internal processing and call operate(a, b, operator)
    //Keep

}


function operate(a, b, operator) {

}


//Math Operations
function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}











