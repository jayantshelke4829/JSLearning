console.log(`----------------------------------------- step 1 -------------------------------------`);
const arrayNumbers =[20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19]
const newArray = arrayNumbers.map((current)=>{
    return current+10
})
console.log(newArray);

console.log(`----------------------------------------- step 2 -------------------------------------`);

const newArray1 = arrayNumbers.map((current)=>{
    return current*current*current
})
console.log(newArray1);

console.log(`----------------------------------------- step 3 -------------------------------------`);

const newArray2 = arrayNumbers.map((current,index)=>{
    return current+index
})
console.log(newArray2);