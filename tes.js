// Traditional function expression
// function MyClass() {
//   this.value = 0;
//   setTimeout(function() {
//     this.value++;
//     console.log(this.value); // This will not work as expected
//   }, 1000);
// }

// Arrow function
function MyClass() {
  this.value = 0;
  setTimeout(() => {
    this.value++;
    console.log(this.value); // This works as expected
  }, 1000);
}

console.log(MyClass());
