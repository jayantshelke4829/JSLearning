console.log(`--------------------------------Step 1-------------------------------------`)
arrayFruits=["Banana","Orange","Apple","Mango","Water Melon"]
let element1 = arrayFruits[0];
console.log(`First element is : ${element1}`);
let arrayLength = arrayFruits.length;
let elementLast = arrayFruits[arrayLength-1];
console.log(`Last element is : ${elementLast}`);
console.log(`--------------------------------Step 2-------------------------------------`)
arrayFruits.unshift("Papaya")
console.log(`the element is added before Banana : ${arrayFruits}`);
console.log(`--------------------------------Step 3-------------------------------------`)
arrayFruits.splice(4,1)
console.log(`the element Mango is removed  : ${arrayFruits}`);
console.log(`--------------------------------Step 4-------------------------------------`)
arrayFruits.push("Pinapple")
console.log(`the element is added : ${arrayFruits}`);
console.log(`--------------------------------Step 5-------------------------------------`)
arrayFruits.splice(4,0,"Dragon Fruit")
console.log(`the element is added  : ${arrayFruits}`);
console.log(`--------------------------------Step 6-------------------------------------`)
arrayFruits.splice(2,1,"Kiwi")
console.log(`the element is replaced  : ${arrayFruits}`);
console.log(`--------------------------------Step 7-------------------------------------`)
arrayFruits.splice(4)
console.log(`the elements staring from index 1 to 4  : ${arrayFruits}`);
console.log(`--------------------------------Step 8-------------------------------------`)

length = arrayFruits.length
console.log(arrayFruits.slice(length-3,length));






