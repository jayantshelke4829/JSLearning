bankSbi = {
    bankName : "SBI",
    year : 1788,
    founder : "Govern",
    branch : "Rokdiya Shegaon"
}

bankLocation = {
    street : "Rokdiya",
    city : "Shegaon",
    pinCode : 444203,
}

let clone = Object.assign(bankSbi , bankLocation); 
console.log(clone);
console.log(`--------------------------------`);

let bank = {...bankSbi};
console.log(bank);


rateOfInterest = {
    homeLoanInterest : 12,
    personalLoanInterest : 30,
    dueInterest : 42
}


let sbiDetails = Object.assign({} , bankSbi, bankLocation, rateOfInterest);
console.log(sbiDetails);

for (const key in sbiDetails) {
    if (sbiDetails.hasOwnProperty(key)) {
        console.log(`${key}: ${sbiDetails[key]}`);
    }
}