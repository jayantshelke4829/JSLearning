console.log(
  `-----------------------------------step 1---------------------------------`
);
let arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
let totalElements = arrayNumbers.length;
console.log(
  `The total number of elements available in array is ${totalElements}`
);

console.log(
  `-----------------------------------step 2---------------------------------`
);
let element1 = arrayNumbers[0];
console.log(`First element is : ${element1}`);
let arrayLength = arrayNumbers.length;
let elementLast = arrayNumbers[arrayLength - 1];
console.log(`Last element is : ${elementLast}`);

console.log(
  `-----------------------------------step 3---------------------------------`
);

let elementLast3 = arrayNumbers[arrayLength - 3];
console.log(`Third Last element is : ${elementLast3}`);

console.log(
  `-----------------------------------step 4---------------------------------`
);
for (let index = 0; index < arrayNumbers.length; index++) {
  if (index % 2 == 0) {
    const element = arrayNumbers[index];
    console.log(element);
  }
}
console.log(
  `-----------------------------------step 5---------------------------------`
);
for (let index = 1; index < arrayNumbers.length; index = index + 2) {
  const element = arrayNumbers[index];
  console.log(element);
}
console.log(
  `-----------------------------------step 6---------------------------------`
);

var sum=0;
 for (var index = 0; index < arrayNumbers.length; index=index+2) {
     const element = arrayNumbers[index];
     sum=sum+element;
    
 }
 console.log(`The addition of odd position is ${sum}`);
console.log(
  `-----------------------------------step 7---------------------------------`
);
 addition=0;
for (let index = 1; index < arrayNumbers.length; index++) {
    if (index % 2 == 0) {
      let element =arrayNumbers[index];
     addition=addition+element;
      console.log(`the even position numbers is ${element}`);
    }
}
console.log(`The addition of odd position is ${addition}`);
console.log(`-----------------------------------step 8---------------------------------`);
addition=0;
for (let index = 1; index < arrayNumbers.length; index++) {
    if (index % 1 == 0) {
      let element =arrayNumbers[index];
     addition=addition+element;
      
    }
}
console.log(`The addition of all element is ${addition}`);
console.log(`-----------------------------------step 9---------------------------------`);
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if(element%5==0){
     console.log(element);
  }
  
}
console.log(`-----------------------------------step 10---------------------------------`);
array=arrayNumbers.includes(115)
console.log(`Is number 115 available :${array}`);

console.log(`-----------------------------------step 11---------------------------------`);
array=arrayNumbers.includes(23)
console.log(`Is number 23 available :${array}`);

console.log(`-----------------------------------step 12---------------------------------`);
arrayNumbers.splice(3,0,55,66)
console.log(arrayNumbers);

console.log(`-----------------------------------step 13---------------------------------`);
arrayNumbers.splice(4,9)
console.log(arrayNumbers);
