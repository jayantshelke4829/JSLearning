console.log(`----------------------------------------- step 1 -------------------------------------`);
console.log(`Addition of array elements by using reduce method`);

const array_numbers = [20,11,40,25,37,49,9,90,60,2,19]
const array = array_numbers.reduce((num1,num2)=>{
    return num1+num2
})
 console.log(array);

 console.log(`Addition of array elements by using traditional way`);

 var num1=0
 for (const num of array_numbers) {
    num1=num1+num
 }
 console.log(num1);

 console.log(`----------------------------------------- step 2 -------------------------------------`);

const array1 = array_numbers.filter(num => num%5==0)
.reduce((num1,num2)=>{
    return num1+num2
})
console.log(`Addition of numbers multiple of 5 in array is = ${array1}`);
 