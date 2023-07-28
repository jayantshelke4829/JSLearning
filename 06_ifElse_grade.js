var voteEligible = function(age){
    
    if (age<=0 || age>=130 || age==undefined  ) {
        console.log(`Your age ${age} is Invalid`);
    } else {
        if (age<=18) {
            console.log(`Your age is ${age} and you are not eligible for vote`);
        } else {
            console.log(`Your age is ${age} and you are eligible for vote`);
        }
    }
}
voteEligible(45)
voteEligible(17)
voteEligible(8)
voteEligible(20)
voteEligible(-10)
voteEligible(200)
voteEligible(0)
voteEligible(undefined)
voteEligible(null)