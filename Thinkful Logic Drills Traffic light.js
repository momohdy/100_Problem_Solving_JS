// You're writing code to control your town's traffic lights.
//  You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and
//  returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.

// const updateLight = (current) => {
//   switch (current) {
//     case "green":
//       return "yellow";
//     case "yellow":
//       return "red";
//     case "red":
//       return "green";

//     default:
//       break;
//   }
// };

// Best Practise Ever
const lights = ['green','yellow','red']

const updateLight = (current) => {
    return lights[(lights.indexOf(current) + 1) % lights.length]
}


// Best Practise for minimize code 
// but its logic not clear if you haven't background in arrow function 

// const updateLight = (current) => {
//   ({
//     green: "yellow",
//     yellow: "red",
//     red: "green",
//   })[current];
// };
