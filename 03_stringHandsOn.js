function stringhandsOn(){console.log(`__________________________________STEP 1__________________________________`);
var string = `      Hey you are doing good, keep it up     `
console.log(`Given string is : ${string}`);
console.log(`__________________________________STEP 2__________________________________`);
console.log(`Length of string is : ${string.length}`);
console.log(`__________________________________STEP 3__________________________________`);
var spaces = string.trim();
console.log(`After trim string is : ${spaces} , After trim length : ${spaces.length}`);
console.log(`__________________________________STEP 4__________________________________`);
var result = string.trim()
var extraSpace = string.length - result.length
console.log(`Removed Space Count : ${extraSpace}`);
console.log(`__________________________________STEP 5__________________________________`);
var charAt0 = spaces.charAt(0)
var charAtEnd = spaces.charAt(33)
console.log(`First Character of trimed string is : ${charAt0} , Last Character of trimed string is : ${charAtEnd}`);
console.log(`__________________________________STEP 6__________________________________`);
console.log(`Total number of words in string - ${spaces.length}`);
console.log(`__________________________________STEP 7__________________________________`);
var result = spaces.indexOf(`good`);
console.log(`Index of "good" is : ${result}`);
console.log(`__________________________________STEP 8__________________________________`);
var result = spaces.substring(22);
console.log(`Substring of index 22 is : ${result}`);
console.log(`__________________________________STEP 9__________________________________`);
var result = spaces.includes(`up`)
console.log(`String ends with word "up" : ${result}`);
console.log(`__________________________________STEP 10__________________________________`);
var result = spaces.includes(`Hey`);
console.log(`String starts with "Hey": ${result}`);
}
stringhandsOn()