const prompt = require('prompt-sync')({ sigint: true });

const ERR_STR_DIV = "Teilen durch Null ist nicht definiert";
const ERR_STR_OP1 = "Rechenart ist nur: + - * /";
const ERR_STR_OP1_2 = "Rechenart ist ausschließlich: + - * /";
const ERR_STR_isNaN = "Bitte eine Zahl eingeben: ";
const FI_NUMBER = "Bitte erste Zahl eingeben: ";
const SE_NUMBER = "Bitte zweite Zahl eingeben: ";
const CHO_OP1 = "Bitte Rechenart auswählen: + - * / : ";

// module App
startApp();

function startApp() {
    output(calculator(getNum1(), getNum2(), getOp1()));
}

// module check op1 prompt
function isMaSy(op1) {
    return op1 === "+" || op1 === "-" || op1 === "*" || op1 === "/" || op1 === ":";
}

// module calculator
function calculator(a, b, op1) {
    switch (op1) {
        case "+":
            return add(a, b);
        case "-":
            return sub(a, b);
        case "/":
        case ":":
            return div(a, b);
        case "*":
            return multi(a, b);
        default:
            return ERR_STR_OP1_2;
    }
}

// module get from prompt
function getNum1() {
    let a = parseFloat(prompt(FI_NUMBER));
    while (isNaN(a)) {
        a = parseFloat(prompt(ERR_STR_isNaN));
    }
    return a;
}

function getNum2() {
    let b = parseFloat(prompt(SE_NUMBER));
    while (isNaN(b)) {
        b = parseFloat(prompt(ERR_STR_isNaN));
    }
    return b;
}

function getOp1() {
    let op1 = prompt(CHO_OP1);
    while (!isMaSy(op1)) {
        op1 = prompt(ERR_STR_OP1);
    }
    return op1;
}

// module math operator: add, sub, multi, div
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function multi(a, b) {
    return a * b;
}

function div(a, b) {
    if (b === 0) {
        return ERR_STR_DIV;
    }
    return a / b;
}
// module output
function output(outputData) {
    console.log(outputData);
}
