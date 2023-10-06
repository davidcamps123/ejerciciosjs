const butons = document.querySelectorAll(".number, .operacion");
let currentInput = "";
let currentOperator = "";
let currentValue = 0;
const calculateButton = document.getElementById("calculate");
const display = document.getElementById("display");
const clearButton = document.getElementById('clear');

butons.forEach((buton) => {
    buton.addEventListener("click", () => {
        if (buton.classList.contains("number")) {
            currentInput += buton.value;
        } else if (buton.classList.contains("operacion")) {
            if (currentOperator !== "") {
                calcular();
            }
            currentOperator = buton.value;
            currentValue = parseFloat(currentInput);
            currentInput = "";
        }
        update();
    });
});

function calcular() {
    const inputNum = parseFloat(currentInput);
    console.log(typeof inputNum + " " + inputNum);
    switch (currentOperator) {
        case "+":
            currentValue += inputNum;
            break;

        case "-":
            currentValue -= inputNum;
            break;

        case "*":
            currentValue *= inputNum;
            break;

        case "/":
            currentValue /= inputNum;
            break;

        default:
            currentValue = inputNum;
    }
    currentInput = currentValue.toString();
    currentOperator = "";
    update();
}

function update() {
    display.value = currentInput;
}

clearButton.addEventListener('click', clearCalculator);
calculateButton.addEventListener("click", calcular);

function clearCalculator() {
    currentInput = '';
    currentOperator = '';
    currentValue = 0;
    update();
}
