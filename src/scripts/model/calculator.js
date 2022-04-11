export class Calculator {
    INFINITE_VALUR = 'infinite';

    addTwoNumbers(firstNumber, secondNumber) {
        return Number(firstNumber) + Number(secondNumber);
    }

    subtractTwoNumbers(firstNumber, secondNumber) {
        return Number(firstNumber) - Number(secondNumber);
    }

    multiplyTwoNumbers(firstNumber, secondNumber) {
        return Number(firstNumber) * Number(secondNumber);
    }

    divideTwoNumbers(firstNumber, secondNumber) {
        if (Number(secondNumber) == 0)
            return this.INFINITE_LITERAL;
        return Number(firstNumber) / Number(secondNumber);
    }
}