const leapYears = function(year) {

    // If not century year
    if (year % 100 != 0) {
        if (year % 4 == 0) {
            return true;
        }
    }
    // If is century year
    if (year % 100 == 0 && year % 400 == 0) {
        return true;
    }

    return false;
};

// Do not edit below this line
module.exports = leapYears;
