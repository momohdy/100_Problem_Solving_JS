/**
 * Create a function with two arguments that will return an array of the first n multiples of x.

 * Assume both the given number and the number of times to count will be positive numbers greater than 0.
 
 * Return the results as an array or list ( depending on language ).
 
*/



// function countBy(x, n) {
//     let array = [] , counter = 0;

//     for (let i = 0 ; i < n ; i++) {
//         counter += x
//         array.push(counter)
//     }

//     return array;
//   }

// console.log(countBy(2,5));

// // Another Solution
// //
function countBy_2(x, n) {
    let array = [] ;

    for (let i = 1 ; i <= n ; i++) {

        array.push(x  *  i)
    }

    return array;
  }

console.log(countBy_2(2,5));
//

// third 

// console.log(
    // Array.from({length: 5}, (v, k) => (k + 1) * 2 )
// );
