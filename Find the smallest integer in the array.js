/*
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

class SmallestIntegerFinder {
    findSmallestInt(args) {
    //     let res = Infinity
    //     for (let i = 0; i < args.length; i++) {
    //         args[i] < res ? res = args[i] : null
    //     }
    //   return res


    
    }
}

let obj1 = new SmallestIntegerFinder()

console.log(obj1.findSmallestInt([34, -345, -1, 100]));



// BEST PRACTISE (in space complexity) because we dont have to declare res variable 
return Math.min(...args)