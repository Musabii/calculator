const buttons = document.querySelector("#buttons");
const numberButtons = buttons.querySelectorAll(".number");
const operatorButtons = buttons.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const backspaceButton = document.querySelector(".backspace");
const displayExpression = document.querySelector("#expression");
const displayResult = document.querySelector("#result");

let lastVal;
let beforeVal;

operatorButtons.forEach(button => button.addEventListener("click", clicked));
numberButtons.forEach(button => button.addEventListener("click", clicked));
clearButton.addEventListener("click", clicked);
backspaceButton.addEventListener("click", clicked);



function add(...arr) {
    return arr.reduce((total, current) => total += current, 0);
}

function sub(...arr) {
    return arr.reduce((total, current) => total -= current);
}

function mul(...arr) {
    return arr.reduce((total, current) => total *= current);
}

function div(...arr) {
    return arr.reduce((total, current) => total /= current);
}

function operate(a, b, op) {
    let fun = (op == "+") ? add :
    (op == "-") ? sub :
    (op == "x") ? mul : div;
    return fun(a, b);
}

function clicked() {
    switch (this.className) {
        case "operator":
            displayExpression.innerHTML += this.value;
            beforeVal = lastVal;
            lastVal = this.value;
            break;
        case "number":
            displayExpression.innerHTML += this.value;
            beforeVal = lastVal;
            lastVal = this.value;
            break;
        case "clear":
            displayExpression.innerHTML = "";
            lastVal = null;
            break;
        case "backspace":
            displayExpression.innerHTML = displayExpression.innerHTML.substr(0, displayExpression.innerHTML.length - 1);
            lastVal = beforeVal;
            break;
    }

    /*
    console.log(val);
    if (this.className == "operator") {
        displayExpression.innerHTML += " " + this.value + " ";
    } else {
        displayExpression.innerHTML += this.value;
        console.log(this.className);
    }*/
}