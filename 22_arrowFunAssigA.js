console.log(`-------------------------------- step 1 -------------------------------`);
let week = ()=>console.log(`Good Morning, Today is Tuesday`);
week()

console.log(`-------------------------------- step 2 -------------------------------`);
let multiply = (num1,num2,num3=1)=>console.log(`multiplication of numbers ${num1}, ${num2}, ${num3} is ${num1*num2*num3}`);
multiply(5,5,2)
multiply(10,4)

console.log(`-------------------------------- step 3 -------------------------------`);
let add = (num1,num2,num3,num4,num5)=>{
    sum = num1+num2+num3+num4+num5
    console.log(`Sum of elements = ${sum}`);
}
add(100,100,200,349,756)
add("I am"," learning"," ES6",' features'," in depth")