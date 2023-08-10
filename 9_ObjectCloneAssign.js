console.log(`-------------------------------------- Step 1 --------------------------------`);
const arrayNums = [20,3,4,56,90,400,49]
let arrayNums1 

arrayNums1 = arrayNums
console.log(arrayNums);
arrayNums1.push(55,66)

console.log(arrayNums1);
console.log(`-------------------------------------- Step 2 --------------------------------`);
let arrayNums2 = [...arrayNums]
console.log(arrayNums);
arrayNums.pop(10,25)
console.log(arrayNums2);
console.log(`-------------------------------------- Step 3 --------------------------------`);
let arrayEven = [2,30,14,8]
let mergedArray =[...arrayEven,...arrayNums]
console.log(mergedArray);
console.log(`-------------------------------------- Step 4 --------------------------------`);
const employee_info = {
    emp_id: 27,
    salary: {
        july_month: "40,0000INR",
        aug_month: "50,0000INR",
        jun_month: "65,0000INR"
    },
    address: {
        locality: {
            colony: "OM Vrindavan Society",
            street: "Kanch Pokli, 431202",
        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"
    },
    mobiles: ["+91 8600 3456 88", "1800- 4567 32", "+91- 9096 5678 77"]
}
console.log(`-------------------------------------- Step 5 --------------------------------`);

for (const key in employee_info.address) {
    employee_info.address.hasOwnProperty(key) 
    console.log(`Address: ${key}`);
}
console.log(`Mobile numbers : ${employee_info.mobiles}`);
console.log(`-------------------------------------- Step 6 --------------------------------`);
let emp = JSON.parse(JSON.stringify(employee_info))
emp.salary.july_month="80 k"
console.log(`Updated clone object : ${emp.salary.july_month}`);
employee_info.address.country="United Kingdom"
console.log(`Clone object : ${emp.address.country}`);
console.log(`Updated original object : ${employee_info.address.country}`);
