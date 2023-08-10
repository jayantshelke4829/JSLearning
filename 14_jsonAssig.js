console.log(`-------------------------------------------------------------`);

let addressStr = `{
    "name": "Aleix Melon",
    "id": "E00245",
    "role": ["DEV", "DBA"],
    "age": 23,
    "doj": "11-12-2019",
    "married": false,
    "address": {
        "street": "32, Lahan St.",
        "city": "Innsbruck",
        "Country": "Austria"
    },
    "referred-by": "E0012"
}`;

const address = JSON.parse(addressStr);
console.log(address);

console.log(`-------------------------------------------------------------`);

let array = address.role[0]
console.log(array);

console.log(`-------------------------------------------------------------`);

let fullName = address.name.split(" ")
console.log(fullName[1]);

console.log(`-------------------------------------------------------------`);


let date = address.doj
let two = "";
for (let index = date.length-4; index < date.length; index++) {
    const element = date[index];
    two = two+element
}
console.log(two);