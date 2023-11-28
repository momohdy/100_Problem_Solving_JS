// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x) {
  // Beggining from zero to handle case => when input is one string element element
  return x.reduce((sum, curr) => +sum + +curr, 0);
}

console.log(sumMix(["4"]));
