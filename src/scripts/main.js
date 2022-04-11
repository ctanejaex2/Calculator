import { Calculator } from "./model/calculator.js";
import { DOMutils } from "./utils/domUtils.js";

const domUtils = new DOMutils();

const btnAdd = domUtils.getElementById('btn_operation_add');
const btnSubtract = domUtils.getElementById('btn_operation_subtract');
const btnMultiply = domUtils.getElementById('btn_operation_multiply');
const btnDivide = domUtils.getElementById('btn_operation_divide');


const calculator = new Calculator();

btnAdd.addEventListener('click', () => {
    const firstNumber = domUtils.getInputValueById('input_first_number');
    const secondNumber = domUtils.getInputValueById('input_second_number');
    const result = calculator.addTwoNumbers(firstNumber, secondNumber);
    alert(`The sum of ${firstNumber} and ${secondNumber} is ${result}`);

});

btnSubtract.addEventListener('click', () => {
    const firstNumber = domUtils.getInputValueById('input_first_number');
    const secondNumber = domUtils.getInputValueById('input_second_number');
    const result = calculator.subtractTwoNumbers(firstNumber, secondNumber);
    alert(`The subtraction of ${firstNumber} and ${secondNumber} is ${result}`);

});

btnMultiply.addEventListener('click', () => {
    const firstNumber = domUtils.getInputValueById('input_first_number');
    const secondNumber = domUtils.getInputValueById('input_second_number');
    const result = calculator.multiplyTwoNumbers(firstNumber, secondNumber);
    alert(`The multiplication of ${firstNumber} and ${secondNumber} is ${result}`);

});

btnDivide.addEventListener('click', () => {
    const firstNumber = domUtils.getInputValueById('input_first_number');
    const secondNumber = domUtils.getInputValueById('input_second_number');
    const result = calculator.divideTwoNumbers(firstNumber, secondNumber);
    alert(`The division of ${firstNumber} and ${secondNumber} is ${result}`);

});


