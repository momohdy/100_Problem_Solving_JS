// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'.
// Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x){
    return x.split("").map( b => b >= 5 ? 1 : 0 ).join("")
    // let arr = x.split("")
    // for (let i = 0; i < arr.length; i++) {
    //     arr[i] >= 5 ? arr[i] = 1 : arr[i] = 0 
    // }
    // return arr.join("")
}

console.log(fakeBin('45385593107843568'));