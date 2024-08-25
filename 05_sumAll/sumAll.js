const sumAll = function(operand1, operand2) {
    let sumAll = 0;
    if (operand1 > 0 && operand2 > 0 && Number.isInteger(operand1) && Number.isInteger(operand02)) {
        if (operand2 > operand1) {
            for ( ; operand1 <= operand2; operand1++) {
                sumAll += operand1;
            }
        } else if (operand1 > operand2) {
            for ( ; operand2 <= operand1; operand2++) {
                sumAll += operand2;
            }
        } else {
            return operand1;
        }
    } else {
        return "ERROR";
    }
    return sumAll;
};

// Do not edit below this line
module.exports = sumAll;
