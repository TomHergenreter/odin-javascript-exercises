// const palindromes = function (inputString) {
//     let parsedString = inputString.toLowerCase().replace(/ |,/g, '');
//     console.log(parsedString);
// };

const palindromes = function (inputString) {
    parsedString = inputString.toLowerCase().match(/[a-z]/g).join('');
    return parsedString === parsedString.split('').reverse().join('') ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
