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

let firstNumber = 0;
let operation = "";
let secondNumber = 0;

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