const professor = {
    name:"Jayant",
    city:"Shegaon",
    phoneNo:9860259868,
    pinCode : 444203,
    degrees : {
        engineering : 'Mechanical',
        PHD : 'Mechatronics'
    },
     certificates : ['Hacker Rank Participation', 'Certificate in IFE course', 'Certificate in Adv Programming'],
     teacherDegrees : function(){
        let prof = this.degrees.engineering + this.degrees.PHD
        console.log(`Teacher degrees : ${prof}`);
     },
     totalExperience : 14,
}
professor.teacherDegrees()
console.log(professor.totalExperience);
professor.pinCode = 444201
console.log(professor);
professor.certificates.push("Oracle Certified")
console.log(professor.certificates);
lastElement =professor.certificates.slice(-1)
console.log(lastElement);

