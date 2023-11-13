/*
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi!!"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"

*/

function remove(string) {
  arr = string.split("");
  arr[arr.length - 1] === "!" && arr.pop();
  return arr.join("");
}


// Another Solution 

// const remove = (str) => {
//   return str.replace(/!$/, "")
// }

console.log(remove("Hi! Hi!"));
