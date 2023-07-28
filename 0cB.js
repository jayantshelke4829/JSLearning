var result = 0 == ` `;
console.log(`In string the default value of character index start's from 0 so the result is : ${ result}`);
console.log(`------------------------------------------------------------------`);

var result = 0 == `0`;
console.log(`In string the default value of character index start's from 0 so the result is : ${ result}`);
console.log(`------------------------------------------------------------------`);

var result = 0 == false;
console.log(`To compare the number 0 and the boolean value false, the comparison return true : ${result}`);
console.log(`------------------------------------------------------------------`);

var result = null == undefined;
console.log(`To compare null and undefined, the comparison return true : ${result}`);
console.log(`------------------------------------------------------------------`);

var result = 1 == [1];
console.log(`To compare the number 1 and the array [1], the comparison return true : ${result}`);
console.log(`------------------------------------------------------------------`);

var result = 1 == true;
console.log(`To compare the number 1 and the boolean value true, the comparison return true : ${result}`);
console.log(`------------------------------------------------------------------`);

var result = 1 == `1`;
console.log(`To compare the number 1 and the string '1', the comparison return true : ${result}`);
