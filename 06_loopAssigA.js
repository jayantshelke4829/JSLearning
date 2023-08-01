console.log(`------------------------------ Step 1 ------------------------------`);

function vowelCount(str){
    
    let count = 0;
    let index = 0;
while ( index < str.length) {
    index++;
     
        let char = str.charAt(index);
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
            char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
            console.log(char); 
            count = count + 1;
        }
    }
    console.log(`Total number of vowels is: ${count}`);
}
vowelCount("I am very good UI Developer");
console.log(`------------------------------ Step 2 ------------------------------`);
let sumOfCube= function(){
    let totalSum = 0;
     for (let index = 1; index <=5; index++) {
         totalSum = totalSum + index*index*index;
     }
     console.log(`Sum of cube of numbers from 1 to 5 is : ${totalSum}`);
 

}
sumOfCube(1)
console.log(`------------------------------ Step 3 ------------------------------`);

let oddPositionedChars = function(str){
    for (let index = 1; index < str.length; index++) {
        const char = str.charAt(index);
        if ((index%2 !=0 && char != ' ')) {
            console.log(`odd numbers is : ${char}`);

        }
    }
console.log(`---------------------------------`);
}
oddPositionedChars('Hard work always pays back')
oddPositionedChars('Soon I will be Angular IT Champ')
