// Write a function, which takes a non-negative integer (seconds) as input
// and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

// const zero = (num) => {
//   return (num.toString.Length = 1 ? `0${num}` : num);
// };

function humanReadable(seconds) {

    let hh = ('0' + parseInt(seconds / 3600)).slice(-2)
    let mm = ('0' + parseInt(seconds / 60 % 60)).slice(-2)
    seconds = ('0' + parseInt(seconds % 60)).slice(-2)

    return hh + ":" + mm + ":" + seconds ;





//   let minutes = parseInt(seconds / 60);
//   seconds = seconds % 60;
//   let hours = parseInt(minutes / 60);
//   minutes = minutes % 60;
  

//   seconds = zero(seconds);
//   minutes = zero(minutes);
//   hours = zero(hours);

}

console.log(humanReadable(3660));
