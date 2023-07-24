console.log(`___________________________________________Step 1___________________________________________`);
var squared = function (num1){
    num2 = num1*num1;
    console.log(`The Square of ${num1} is ${num2}`); 
    
}
squared(5);
squared(24);
squared(33);
squared(84);
console.log(`___________________________________________Step 2___________________________________________`);
console.log(typeof squared);
console.log(`___________________________________________Step 3___________________________________________`);
var area = function (length, breadth){
    area = length*breadth;
    console.log(`The Rectangle length is ${length} and breadth is ${breadth} then the area is equal to ${area}`);
}
area(499,917);
console.log(`___________________________________________Step 4___________________________________________`);
var swapValues = function (num1, num2){
    console.log(`'Before Swap' ,'num1 - ', ${num1}, ' num2 - ', ${num2}`);
    temp = num1;
    num1 = num2;
    num2 = temp;
    console.log(`'After Swap' ,'num1 - ', ${num1}, ' num2 - ', ${num2}`);
}
swapValues(`Mahi`, `Raina`);

swapValues(55, 77);
console.log(`___________________________________________Step 5___________________________________________`);
var string = function(str){ 
    console.log(`The total characters available in the string is ${str.length}`);
    var char6 = str.charAt(6);
    console.log(`The character at index 6 is ${char6}`);
    var char11 = str.charAt(11);
    console.log(`The character at index 11 is ${char11}`);
    var char40 = str.length-1;
    var char = str.charAt(char40)
    console.log(`The last character is ${char}`);
    var char = str.charAt(0)
    console.log(`The first character is ${char}`);
    var char40 = str.length-3;
    var char = str.charAt(char40)
    console.log(`The third last character is ${char}`);
    var words = str.split(' ')
    var square = words.length*words.length;
    console.log(`Square of Total no of words is ${square}`);
}
string(`JS the most popular language of internet`)
