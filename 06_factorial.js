 function factorial(num){
    
var result = 1
for (let index = 1; index <= num; index++) {
    result = result * index
    
}
console.log(`Factorial of ${num} is ${result}`);}
factorial(5)
factorial(9)
factorial(11)
factorial(7)

// var fact = 1;
// function factorial(num){
//     // 5 * 4 * 3 * 2 * 1
//    if(num==1) {
//     return fact;
//    } else {
//     let num1 = num - 1 
//     fact = num *num1; //5 * 4 * 3 * 2 * 1
//    } 
// }
// factorial(5);
// console.log(`Factorial using recursion is: ${fact}`);