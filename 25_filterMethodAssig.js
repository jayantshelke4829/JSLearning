console.log(`----------------------------------------- step 1 -------------------------------------`);

const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19]

const array = arrayNumbers.filter((num)=>{
    return num>50
})
console.log(array);

console.log(`----------------------------------------- step 2 -------------------------------------`);

const array1 = arrayNumbers.filter((num)=>{
    return num%2==0
})
console.log(array1);

console.log(`----------------------------------------- step 3 -------------------------------------`);

const array2 = arrayNumbers.filter((num)=>{
    return num%2==1
})
console.log(array2);

console.log(`----------------------------------------- step 4 -------------------------------------`);

const array3 = arrayNumbers.filter((num)=>{
    return num%5==0
})
console.log(array3);

console.log(`----------------------------------------- step 5 -------------------------------------`);

const array4 = arrayNumbers.filter((num)=>{
    return num>20 &&  num<50
})
console.log(array4);
