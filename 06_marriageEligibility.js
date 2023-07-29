var marriageEligibility = function(gender, age){
    if (gender==`Male` && age>=21) {
        console.log(`Your gender is ${gender} and age is ${age} so you are eligible for marriage`);
    } 
    if (gender==`Male` && age<=21) {
        console.log(`Your gender is ${gender} and age is ${age} so you are not eligible for marriage`);

    }
    if (gender==`Female` && age<=18) {
        console.log(`Your gender is ${gender} and age is ${age} so you are not eligible for marriage`);

    }
    
    
    if (gender==`Female` && age>=18) {
        console.log(`Your gender is ${gender} and age is ${age} so you are eligible for marriage`);
    }
    
    
    if (gender==`Other` && age>=0 && age<=0 && isNaN(age)) {
        console.log(`You are not eligible for marriage`);

    }
    
}
marriageEligibility(`Male`,17);
marriageEligibility(`Male`,25);
marriageEligibility(`Female`,28);
marriageEligibility(`Female`,16);
marriageEligibility(`Other`,35);
marriageEligibility(`Other`,41);