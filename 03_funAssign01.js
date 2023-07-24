console.log('* * * * * * * * * * * * * * * * * * * * * * * * Step 1 * * * * * * * * * * * * * * * * * * * * * * * * ');
function show(){
    console.log('My name is Jayant');
    console.log('I am BE Student');
}
function swap(){
    console.log('Before Swap' ,num1, num2,);
    var temp = num1;
num1 = num2;
num2 = temp;
console.log('After Swap' ,num1, num2,);
}
show()
console.log('--------------------------------------');
var num1='O'
var num2='H2'
swap('O','H2')
console.log('* * * * * * * * * * * * * * * * * * * * * * * * Step 2 * * * * * * * * * * * * * * * * * * * * * * * * ');
function personalDetails(firstName, lastName, collegeName){
    var firstName;
    var lastName;
    var collegeName;
    console.log('First Name -', firstName, '; Last Name - ', lastName, '; College Name - ', collegeName);
}
var firstName = 'Jayant';
var lastName = 'Shelke';
var collegeName = 'MGICOET';
personalDetails(firstName, lastName, collegeName);
console.log('* * * * * * * * * * * * * * * * * * * * * * * * Step 3 * * * * * * * * * * * * * * * * * * * * * * * * ');
function swapValues(num1, num2){
    console.log('Before Swap -' ,num1, num2,);
    var temp = num1;
num1 = num2;
num2 = temp;
console.log('After Swap  -' ,num1, num2,);
}
var num1 ='Virat';
var num2 ='Anushka';
swapValues(num1, num2);
console.log('--------------------------------------');
var num1 ='1000';
var num2 ='2000';
swapValues(num1, num2);
console.log('* * * * * * * * * * * * * * * * * * * * * * * * Step 4 * * * * * * * * * * * * * * * * * * * * * * * * ');
function addition(arg1, arg2, arg3){
    console.log('Values are: ', arg1, arg2, arg3);
    var result = arg1 + arg2 + arg3;
    return result;
}
var res = addition(10.23, 600, 40);
console.log('Result is ', res);
console.log('--------------------------------------');
var result = addition('Hello', 'Good', 'Morning');
console.log('Result is ', result);
console.log('* * * * * * * * * * * * * * * * * * * * * * * * Step 5 * * * * * * * * * * * * * * * * * * * * * * * * ');
function bankdetails(bankName,accountNum,location,pinCode){
    var bankName;
    var accountNum;
    var location;
    var pinCode;
    console.log('Bank Name - ', bankName, ' ; Account Number - ', accountNum, ' ; Location - ', location, ' ; Pin Code - ', pinCode);
}
var bankName = 'CITI Bank';
var accountNum = 3456782345;
var location = 'Pune';
var pinCode = 431202;
bankdetails(bankName,accountNum,location,pinCode);
var bankName = "Axis Bank";
var accountNum = 7856782345;
var location = 'Mumbai';
var pinCode = 441202;
bankdetails(bankName,accountNum,location,pinCode);
var bankName = "HDFC Bank";
var accountNum = 8956782345;
var location =  'Pune';
var pinCode = 631202;
bankdetails(bankName,accountNum,location,pinCode);
