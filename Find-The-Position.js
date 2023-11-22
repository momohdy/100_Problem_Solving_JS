/*

DESCRIPTION:
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"

*/

const position = (letter) => {
    return `Position of alphabet: ${letter.charCodeAt() - 96}` 
}

console.log(position("a"));