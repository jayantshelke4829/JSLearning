console.log(`------------------------------Step 1------------------------------`);
var squareOfWordLength = function(num2){
    num1=num2.length;
    num3=num2.length*num2.length;
    console.log(`The Square of the length of ${num2} is ${num3}`);
    return num1
}
squareOfWordLength(`Javascript`);
squareOfWordLength(`Google Chrome`);
squareOfWordLength(`Developer Smart`);
console.log(`------------------------------Step 2------------------------------`);
var line = function(value){
    var len = value.length;
    console.log(`Length of "I am Angular Developer" string is: ${len}`);
    
    var word = value.split(" ");
    var str = word.length;
    console.log(`Total number of words in "I am Angular Developer" : ${str}`);
    var square = len / str;
    console.log(`The length is divided by total no of word is: ${square}`);
    
    var square = len * str;
    console.log(`The length is multiply by total no of word is: ${square}`);
    }
    line("I am Angular Developer")