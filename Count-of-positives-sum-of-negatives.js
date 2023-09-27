// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(arr) {
  if (arr == null || !arr.length) {
    return [];
  }
//   COP = count of positives , SON = sum of negatives
  let COP = 0 , SON = 0;

  arr.map((x) => (x > 0 ? (COP += 1) : (SON += x)));

  return [COP, SON];
}

console.log(
  countPositivesSumNegatives([
    0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ])
);
