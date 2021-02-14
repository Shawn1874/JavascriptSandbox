    function add(num1, num2) {
        return num1 + num2;
    }

    function subtract(num1, num2) {
        return num1 - num2;
    }

    function multiply(num1, num2) {
        return num1 * num2;
    }

   function divide(num1, num2) {
        return num1 / num2;
    }

    function getRemainder(num1, num2) {
        return num1 % num2;
    }

    function raiseToPower(value, power) {
        return value ** power;
    }

    module.exports = { 
        add,
        subtract,
        multiply,
        divide,
        getRemainder,
        raiseToPower
    };