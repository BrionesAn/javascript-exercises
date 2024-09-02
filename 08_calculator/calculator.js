const add = function(operand1, operand2) {
  return operand1 + operand2;
};

const subtract = function(operand1, operand2) {
	return operand1 - operand2;
};

const sum = function(array) {
	return array.reduce((total, item) => total + item, 0);
};

const multiply = function(array) {
  return array.reduce ( (total, item) => total * item, 1);
};

const power = function(operand1, operand2) {
	return Math.pow(operand1, operand2);
};

const factorial = function(operand) {
  let total = 1;
	for (let i = 1; i <= operand; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
