console.log(`------------------------------Step 1------------------------------`);

var tcsInterview = function(gradeScore, hscScore, sscScore, candidateName){
    result = (gradeScore >=70 || hscScore >=80 || sscScore >=90) ? `Congrates ${candidateName} you are eligible for TCS interview` : `${candidateName} unfortunately you are not eligible for TCS interview`;
    console.log(`${result}`);
}
tcsInterview(80, 86, 90,`Jayant`)
tcsInterview(70, 65, 55,`Ashutosh`)
tcsInterview(60, 65, 88, `Harshad`)

console.log(`------------------------------Step 2------------------------------`);

var maleMarriageEligibility = function(gender, age, boyName){
    
    result = (gender == `Male` && age >=21) ? `Hey ${boyName} your age is ${age} so you are eligible for Marriage`:`Hey ${boyName} your age is ${age} so you are not eligible for Marriage`
    console.log(result);
}
maleMarriageEligibility(`Male`, 25, `Billgates`)
maleMarriageEligibility(`Male`, 17,`Stew Jobs`)

console.log(`------------------------------Step 3------------------------------`);


var femaleMarriageEligibility = function(gender, age, girlName){
    
    result = (gender == `Female` && age >=18) ? `Hey ${girlName} your age is ${age} so you are eligible for Marriage`:`Hey ${girlName} your age is ${age} so you are not eligible for Marriage`
    console.log(result);
}
femaleMarriageEligibility(`Female`, 16, `Jennifer`)
femaleMarriageEligibility(`Female`, 27, `Malinda Gates`)
