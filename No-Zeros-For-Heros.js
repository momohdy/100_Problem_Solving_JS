/*
Numbers ending with zeros are boring.
They might be fun in your world, but not here.
Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway
*/


/*
number => string => array 
array => string => number
حواااار , بس حلها صح 

*/
const noBoringZeros = (n) => {
  let arr = String(n).split("")
    i = arr.length - 1;

  while (arr[i] == "0") {
    arr.pop()
    i--
  }

  return Number(arr.join(""));
};

console.log(noBoringZeros(10300));

// BEST PRACTISE 

/*
const noBoringZeros = (n) => {

  while (n % 10 == 0 && n!=0) {
    n/=10
  }

  return n;
};

*/
