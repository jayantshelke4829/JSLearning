
console.log(`----------------------------------------- step 1 -------------------------------------`);


const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45]
const arrayR =arrayRollNumbers.reverse()
console.log(arrayR);

console.log(`----------------------------------------- step 2 -------------------------------------`);

const array =arrayRollNumbers.sort()
console.log(array);

console.log(`----------------------------------------- step 3 -------------------------------------`);

const array1 =arrayRollNumbers.sort((num1,num2)=>{
    return num1>num2? 1 :-1
})
console.log(array1);

console.log(`----------------------------------------- step 4 -------------------------------------`);


const array2 = arrayRollNumbers.sort((num1,num2)=>{
    return num1>num2? 1 :-1
})
array2.slice(arrayRollNumbers.length-1)
.map(num=>console.log(`The greatest number is ${num}`))

console.log(`----------------------------------------- step 5 -------------------------------------`);


const array3 =  arrayRollNumbers.sort((num1,num2)=>{
    return num1>num2? -1 :1
})
array3.slice(arrayRollNumbers.length-1)
.map(num=>console.log(`The smallest number is ${num}`))

console.log(`----------------------------------------- step 6 -------------------------------------`);


const array4 =  arrayRollNumbers.filter((num1,index)=>{
    return arrayRollNumbers.indexOf(num1) == index
})
console.log(array4);
