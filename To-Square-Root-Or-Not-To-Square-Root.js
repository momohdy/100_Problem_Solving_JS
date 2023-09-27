// Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this:
// If the number has an integer square root, take this, otherwise square the number.

function squareOrSquareRoot(array) {
  return array.map((x) =>
  Math.sqrt(x) % 1 == 0 ? Math.sqrt(x) : Math.pow(x, 2)
  );
}

console.log(squareOrSquareRoot([100, 101, 5, 5, 1, 1]));


// another solution 

//   function squareOrSquareRoot(array) {
//   return array.map((x) =>
//   Number.isInteger(Math.sqrt(x)) ? Math.sqrt(x) : x * x
//   );
// }
