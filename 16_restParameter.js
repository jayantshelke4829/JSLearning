function add(num1, num2, ...num ){
    let sum = 0
    for (let index = 0; index < num.length; index++) {
        sum =sum + num[index]
    }    num3 = num1+num2+sum

    // console.log(`num1 ${num1},  num2 ${num2}`);
    console.log(num3);
}
add(5, 6);
add(9, 5, 6);
add(78, 90, 51, 68);
add(89, 90, 45,78, 90, 51, 68);