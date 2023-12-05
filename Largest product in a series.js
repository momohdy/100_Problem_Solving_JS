// Complete the greatestProduct method so
// that it'll find the greatest product of five consecutive digits in the given string of digits.

// For example:

// greatestProduct("12383
// 45393
//27238
// 23958
// 3") // should return 3240
// 1 23834 53932 72382 39583
// The input string always has more than five digits.

// Adapted from Project Euler.

const greatestProduct = (input) => {
  let max = 0,
    arr = [...input],
    res = 0;
  for (let i = 0; i < arr.length ; i++) {
    res = +arr[i] * +arr[i + 1] * +arr[i + 2] * +arr[i + 3] * +arr[i + 4];
     res > max && (max = res);
  }
  return max;
};

console.log(greatestProduct("123834539327238239583"));
