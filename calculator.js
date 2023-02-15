let displayString = "1+2+3*4-10/5+1";

const userDisplay = document.getElementById('calc-display');

updateDisplay(displayString);

//GUI Variables
const btnOne = document.getElementById("one");
const btnTwo = document.getElementById("two");
const btnThree = document.getElementById("three");
const btnFour = document.getElementById("four");
const btnFive = document.getElementById("five");
const btnSix = document.getElementById("six");
const btnSeven = document.getElementById("seven");
const btnEight = document.getElementById("eight");
const btnNine = document.getElementById("nine");
const btnZero = document.getElementById("zero");
const btnDecimal = document.getElementById("decimal");
const btnDivide = document.getElementById("divide");
const btnMultiply = document.getElementById("multiply");
const btnMinus = document.getElementById("minus");
const btnPlus = document.getElementById("plus");
const btnRemove = document.getElementById("remove");
const btnClear = document.getElementById("clear");
const btnEquals = document.getElementById("equals");

const inputBtns = [
    btnOne, btnTwo, btnThree, btnFour, btnFive,      btnSix, btnSeven, btnEight, btnNine, btnZero, btnDecimal, btnDivide, btnMultiply, btnMinus, btnPlus
];

//GUI Functionality
inputBtns.forEach(item => {
    item.addEventListener('click', () => {
        displayString += item.textContent;
        updateDisplay(displayString);
    })
});

btnRemove.addEventListener('click', () => {
    remove();
});

btnClear.addEventListener('click', () => {
    clear();
});

btnEquals.addEventListener('click', () => {
    calculate();
});

//Keyboard Variables
const inputKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
'.', '*', '/', '+', '-'
];

const funcKeys = ['Backspace', 'Delete', 'Enter'];
console.log('Backspace' in funcKeys);

//Keyboard Functionality
window.addEventListener('keydown', (e) => {
    if (inputKeys.includes(e.key)){
        displayString += e.key;
        updateDisplay(displayString);
    }
    else if (funcKeys.includes(e.key)) {
        if (e.key == 'Backspace'){
            remove();
        }
        else if(e.key == 'Delete'){
            clear();
        }
        else if(e.key == 'Enter'){
            calculate();
        }
    }
});


//Outputs: Text display
function updateDisplay(displayValue) {
    userDisplay.textContent = displayValue;
}

function clearDisplay() {
    updateDisplay("");
}

//User functionality/calls: 
function remove() {
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
    console.log(parseSubmission(formatSubmission(validateSubmission(displayString))));

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
    //multiple decimal points in a number
    return userSubmission;
}

function formatSubmission(validatedSubmission) {
    //Should accept validated submission, create groups based on operational priority
    let myNumbers = []
    return myNumbers = validatedSubmission.split(/([*/+-])/); //Split on delimeters, parentheses allows us to keep the delimeter.
}

function parseSubmission(formattedSubmission) {
    const halfParsed = parseMultDiv(formattedSubmission);
    const fullyParsed = parseAddSub(halfParsed);
    return fullyParsed;
}

function parseMultDiv(submission){
    //Recursively process array performing multiply and divide operations
    for (let i=0; i<submission.length; i++){
        console.log(submission);
        if (submission[i] == '*' || submission[i] == '/'){
            const opResult = operate(submission[i-1], submission[i+1], submission[i]);
            
            let newArray = submission;
            newArray.splice(i-1, 3, opResult); // Remove operator and operands on either side, replace with result of operation

            return parseMultDiv(newArray);
        }
    }
    return submission;
}

function parseAddSub(submission){
    //Recursively process array performing add and subtract operations
    for (let i=0; i<submission.length; i++){
        console.log(submission);
        if (submission[i] == '+' || submission[i] == '-'){
            const opResult = operate(submission[i-1], submission[i+1], submission[i]);
            
            let newArray = submission;
            newArray.splice(i-1, 3, opResult); // Remove operator and operands on either side, replace with result of operation

            return parseAddSub(newArray);
        }
    }
    return submission;
}


//Math Operations
function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    return Number(a) / Number(b);
}

function operate(a, b, operator) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}
