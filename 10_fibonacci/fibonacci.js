const fibonacci = function(index) {
    parseInt(index);
    if (index < 0) {
        return "OOPS";
    } else if (index == 0) {
        return 0;
    }

    let firstIndex = 0;
    let secondIndex = 1;
    let current;

    for (let i = 2; i <= index; i++) {
        current = firstIndex + secondIndex;
        firstIndex = secondIndex;
        secondIndex = current;
    }
    return secondIndex;
};

// Do not edit below this line
module.exports = fibonacci;
