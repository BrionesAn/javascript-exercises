const palindromes = function (word) {
    let newWord = word.toLowerCase();
    newWord = newWord.replace(/[\s,!?.]/g, ""); // Use a regex to remove spaces and punctuation
    let j = newWord.length - 1;

    for (let i = 0; i < newWord.length / 2; i++) {
        if (newWord[i] !== newWord[j]) { // Use strict equality
            return false;
        }
        j--;
    }
    return true;
};


// Do not edit below this line
module.exports = palindromes;
