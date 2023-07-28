console.log(`-------------------------------Implicit Conversion to String-------------------------------`);

var result =`3`+ 2;
console.log(`The result is : ${ result}`);
console.log(`because we use + operater to concatenate string '3' and number 2, so the result will convert into string : ${result}`);
console.log(`------------------------------------------------------------------`);

var result =`3`+ true;
console.log(`The result is : ${ result}`);
console.log(`because we use + operater to concatenate string '3' and boolean value true, so the result will convert into string : ${result}`);
console.log(`------------------------------------------------------------------`);

var result =`3`+ undefined;
console.log(`The result is : ${ result}`);
console.log(`because we use + operater to concatenate string '3' and the value undefined, so the result will convert into string : ${result}`);
console.log(`------------------------------------------------------------------`);

var result =`3`+ null;
console.log(`The result is : ${ result}`);
console.log(`because we use + operater to concatenate string '3' and the value null, so the result will convert into string : ${result}`);

console.log(`-------------------------------Implicit boolean Conversion to number-------------------------------`);

result = `4` - true;
console.log(`The result is : ${ result}`);
console.log(`because in - operater the value of true is 1 so the output we will get is 4-1 and result is : ${result}`);
console.log(`------------------------------------------------------------------`);

result = 4 + true;
console.log(`The result is : ${ result}`);
console.log(`because in + operater the value of true is 1 so the output we will get is 4+1 and result is : ${result}`);
console.log(`------------------------------------------------------------------`);


result = 4 - false;
console.log(`The result is : ${ result}`);
console.log(`because in + operater the value of false is 0 so the output we will get is 4+0 and result is : ${result}`);

console.log(`-------------------------------Implicit String Conversion to Number-------------------------------`);

result = `4` - `2`
console.log(`The result is : ${ result}`);
console.log(`because the string '4' and string '2' is convert to number so it will subtract '2' from '4' and result is : ${result}`);
console.log(`------------------------------------------------------------------`);

result = `4` - 2
console.log(`The result is : ${ result}`);
console.log(`because the string '4' is convert to number so it will subtract 2 from '4' and result is : ${result}`);
console.log(`------------------------------------------------------------------`);

result = `4` * 2
console.log(`The result is : ${ result}`);
console.log(`because the string '4' is convert to number so it will multiply '4' and 2 and result is : ${result}`);
console.log(`------------------------------------------------------------------`);

result = `4` / 2
console.log(`The result is : ${ result}`);
console.log(`because the string '4' is convert to number so '4' will divided by 2  and result is : ${result}`);








