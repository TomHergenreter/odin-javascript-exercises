
//Create letter libraries to convert letter to number values
const uppercaseLib = [...Array(26)].map((value, index) => String.fromCharCode(index + "A".charCodeAt()));
const lowercaseLib = [...Array(26)].map((value, index) => String.fromCharCode(index + "a".charCodeAt()));

const caesar = function(string, shiftValue) {
    let letterLib;
    let encodedString = [...string].map(function(letter){
        letter === letter.toLowerCase() ? letterLib = lowercaseLib : letterLib = uppercaseLib;//set correct letter library
        if(!letter.match(/[a-z]|[A-Z]/)) return letter;
        for(character of letterLib){
            if (letter === character){
                let encodedLetter = letterLib.indexOf(character);
                let shiftedLetter = (shiftValue % 26) + encodedLetter;
                if (shiftedLetter > 25){//wrap positive index from z to a
                    shiftedLetter = (shiftedLetter - 26);
                }else if(shiftedLetter < 0){//wrap negative index from a to z
                    shiftedLetter = (26 - (-shiftedLetter));
                }
                return letterLib[shiftedLetter];
            }    
        }
    })
    return encodedString.join('');
}

// Do not edit below this line
module.exports = caesar;








