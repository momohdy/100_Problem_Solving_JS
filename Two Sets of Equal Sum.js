// Task
// If possible, divide the integers 1,2,…,n into two sets of equal sum.

// Input
// A positive integer n <= 1,000,000.

// Output
// If it's not possible, return [ ] (Javascript and Python) or
//  ( ) (Python) or [[],[] ] (Java, C#) or None (Scala).
// If it's possible, return two disjoint sets.
//  Each integer from 1 to n must be in one of them.
//  The integers in the first set must sum up to the
//  same value as the integers in the second set.
// The sets can be returned in a tuple, list, or array, depending on language.

// Examples:
// For n = 8, valid answers include:

// [1, 3, 6, 8], [2, 4, 5, 7] (or [[1, 3, 6, 8], [2, 4, 5, 7]])

// [8, 1, 3, 2, 4], [5, 7, 6]

// [7, 8, 3], [6, 1, 5, 4, 2], and others.

// For n = 9 it is not possible. For example,
//  try [6, 8, 9] and [1, 2, 3, 4, 5, 7], but the first sums to 23 and the second to 22.
//  No other sets work either.

// Source: CSES (Code Submission Evaluation System) - https://cses.fi/problemset/task/1092

// sum must be even => let it divide by two
// arr1 = arr2    mean that each of them is half of sum /





function createTwoSetsOfEqualSum(n) {
  // Calculate the total sum of numbers from 1 to n
  const totalSum = (n * (n + 1)) / 2;

  // Check if the total sum is odd (not divisible by 2)
  if (totalSum % 2 !== 0) {
      // If the total sum is odd, it's not possible to divide into two sets
      return [];
  }

  // Initialize sets
  const set1 = [];
  const set2 = [];

  // Calculate the target sum for each set
  let targetSum = totalSum / 2;

  // Iterate through the numbers from n to 1
  for (let i = n; i > 0; i--) {
      // Check if adding the current number to set1 will not exceed the target sum
      if (targetSum - i >= 0) {
          set1.push(i);
          targetSum -= i;
      } else {
          // If it does, add the current number to set2
          set2.push(i);
      }
  }

  // If the target sum is not zero, it's not possible to divide into two sets
  if (targetSum !== 0) {
      return [];
  }

  // Return the two sets
  return [set1, set2];
}

console.log(createTwoSetsOfEqualSum(8));
