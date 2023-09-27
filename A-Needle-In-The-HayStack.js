// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle

function findNeedle(haystack) {
    return haystack.map((x , i) => x == "needle" &&  `found the needle at position ${i} `).filter(x => x!=false).toString()
}

console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));

// another solution 

// return "found the needle at position " + haystack.indexOf("needle");