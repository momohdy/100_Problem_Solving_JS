// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
    return String(str.split("").map(x => x + x)).replaceAll(",","") 
}

// another solution 

// function doubleChar(str) {
    // return String(str.split("").map(x => x + x).join("") )
// }

console.log(doubleChar("abcd"));