// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {

    return arr.filter((x) => x > 0).reduce((acc, current) => acc + current, 0);

  //   let sum = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] > 0) {
  //       sum = sum + arr[i];
  //     }
  //   }
  //   return sum;
}

console.log(positiveSum([-5, 6, 8, -4]));
