const removeFromArray = function(array, ...restOfArguments) {
/* 
    Iterate array searching for specified arguments
    splice the array if found an argument
    return array
*/

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j <restOfArguments.length; j++) {
            if (array[i] === restOfArguments[j]) {
                array.splice(i, 1);
                i--;
            }
        }
    }
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
