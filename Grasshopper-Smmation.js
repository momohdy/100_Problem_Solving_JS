/*
Write a program that finds the summation of every number from 1 to num.
The number will always be a positive integer greater than 0.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
*/

// create array of lenght = num
// log => array.keys()  


var summation =  (num) => {
    let arr = Array.from({length : num} , (_ , i) => i + 1)
    return arr.reduce( ( sum , curr ) => sum + curr)
}

console.log(summation(8));


// BEST PRACTISE 

// var summation =  (num) => {
//     return ( num * (num + 1) / 2)
// }