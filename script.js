const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operation");
const clearButton = document.querySelector("#clear");
const equalsButton = document.querySelector("#equals");


// Basic arithemitic functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Tracking all the numbers
let firstNumber = 0;
let operation = "";
let secondNumber = 0;
let resetDisplay = true;

// Operation
function operate(operation, firstNumber, secondNumber) {
    if (operation === "+") {
        return add(firstNumber, secondNumber);
    } else if (operation === "-") {
        return subtract(firstNumber, secondNumber);
    } else if (operation === "*") {
        return multiply(firstNumber, secondNumber);
    } else if (operation === "/") {
        return divide(firstNumber, secondNumber);
    } else {
        console.log("ERROR");
    }
}

// Updating display
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        const number = button.textContent;

        if (resetDisplay) {
            display.textContent = number;
            resetDisplay = false;
        } else {
            if (display.textContent === "0") {
                display.textContent = number;
            } else {
                display.textContent += number;
            }
        };
    });
});

// Making operation buttons work
operationButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (operation !== "" && !resetDisplay) {
            secondNumber = parseFloat(display.textContent);
            firstNumber = operate(operation, firstNumber, secondNumber);
            display.textContent = firstNumber;
        } else {
            firstNumber = parseFloat(display.textContent);
        }

        operation = button.textContent;
        resetDisplay = true;
    })
})

// clear button
clearButton.addEventListener("click", () => {
    firstNumber = 0;
    operation = "";
    secondNumber = 0;
    currentNumber = 0;
    display.textContent = "0";
    resetDisplay = true;
})

// equals button
equalsButton.addEventListener("click", () => {
    if (operation === "") {
        return;
    }

    secondNumber = parseFloat(display.textContent);
    const result = operate(operation, firstNumber, secondNumber);

    display.textContent = result;
    firstNumber = result;
    resetDisplay = true;
})