// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

function sumArray(arr) {
  return arr
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((acc, current) => acc + current, 0);

  //   let temp = 0;
  //   if (arr == null) {
  //     return 0;
  //   }
  //   for (let i = 0; i < arr.length; i++) {
  //     for (let j = i + 1; j < arr.length; j++) {
  //       if (arr[i] > arr[j]) {
  //         temp = arr[j];
  //         arr[j] = arr[i];
  //         arr[i] = temp;
  //       }
  //     }
  //   }
  //   return arr.slice(1, -1).reduce((acc, current) => acc + current, 0);
}

console.log(sumArray([1, 1, 11, 2, 3]));
