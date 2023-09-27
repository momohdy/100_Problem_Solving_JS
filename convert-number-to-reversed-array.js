// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
  return n
    .toString()
    .split("")
    .map((i) => Number(i))
    .reverse();

    // return String(n).split('').map(Number).reverse()


  // this solve works in my host , but it doesn't accept in codewars! -->
  // const arr = [];
  // if (n == 0) {
  //   arr.push(0) ;
  // }
  // while (Math.floor(n % 10) != 0) {
  //   arr.push(Math.floor(n % 10));
  //   n = n / 10;
  // }
  // return arr;
}

console.log(digitize(0));
