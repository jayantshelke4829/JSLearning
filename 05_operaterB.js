console.log(`------------------------------Step 1------------------------------`);
var greaterNumber = function(num1, num2){
    //console.log(`Greater Number between ${num1} and ${num2} is ${Math.max(num1, num2)}`);
    var result = num1>num2? num1:num2
    console.log(`Greater Number between ${num1} and ${num2} is ${result}`);
}
greaterNumber(10, -10)
greaterNumber(800, 899)
console.log(`------------------------------Step 2------------------------------`);
var isEvenOrOddNum = function(evenOdd){
    var result = (evenOdd % 2 ==0) ? "Even" : "Odd";
    console.log(`Given number ${evenOdd} is : ${result}`);
}
isEvenOrOddNum(5)
isEvenOrOddNum(24)
isEvenOrOddNum(33)
isEvenOrOddNum(81)
console.log(`------------------------------Step 3------------------------------`);
var isEvenOrOddlen = function(num1){
    result = (num1.length % 2 ==0) ? "Even" : "Odd";
    console.log(`length of word ${num1} is ${result} number`);
}
isEvenOrOddlen(`JavaScript`)
isEvenOrOddlen(`developer`)
isEvenOrOddlen(`Google`)