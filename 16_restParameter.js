function add(num1, num2, ...num ){
    let sum1 = num1 + num2
    let sum = 0
    for (let index = 0; index < num.length; index++) {
        sum = sum + num[index]
    }   let num3 = num1+num2+sum

    // console.log(`num1 ${num1},  num2 ${num2}`);
    console.log(`sum of first two parameters is - ${sum1} and total sum of all parameters is - ${num3}`);
}
add(5, 6);
add(9, 5, 6);
add(78, 90, 51, 68);
add(89, 90, 45,78, 90, 51, 68);