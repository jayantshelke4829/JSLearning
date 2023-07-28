console.log(`------------------------------Step 1------------------------------`);

var evenOdd = function(num1){
    if (num1%2==0) {
        console.log(`Number ${num1} is even`);
    } else {
        console.log(`Number ${num1} is odd`);

    }
}
evenOdd(45)
evenOdd(70)
evenOdd(67)
evenOdd(98)

console.log(`------------------------------Step 2------------------------------`);

var vote = function(num1){
    if (num1>=18) {
        console.log(`your age is ${num1} and you are eligible for vote`);
    } else {
        console.log(`your age is ${num1} so you are not eligible for vote`);

    }
}
    vote(18)
    vote(20)
    vote(17)
    vote(40)
    console.log(`------------------------------Step 3------------------------------`);

var java = function(num1){
    if (num1.length<10) {
        console.log(`the characters in the string '${num1}' is less than 10`);

    } else {
        console.log(`the characters in the string '${num1}' is greater than 10`);

    }
}
java(`JavaScript-ES6`)
console.log(`------------------------------Step 4------------------------------`);
var javaEx = function(num1){
    if ( num1.startsWith('Java')) {
        console.log(`the string '${num1}' starts from Java`);
    } else {
        console.log(`the string '${num1}' not starts from Java`);

    }
}
javaEx(`JavaScript Language`)
