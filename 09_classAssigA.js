console.log(`----------------------------------- Step 1 --------------------------------------`);
class Vehicle {
    constructor(name, transmission, enginePower, mileage, seats ){
      this.name = name;
      this.transmission = transmission;
      this.enginePower = enginePower;
      this.mileage = mileage;
      this.seats = seats;
    }
    show(){
      console.log(`Vehicle Name is : ${this.name} , Plate Number : ${this.transmission} , Engine Power: ${this.enginePower} , Mileage : ${this.mileage}, Seats : ${this.seats}
      `);
    }
  
  }
  let ferrari =    new Vehicle("Ferrari 488                ","Automatic  ","660 bhp","8.77 kmpl    ",5)
  let mclaren =    new Vehicle("Mclaren GT                 ","Automatic  ","611 bhp","8.2 kmpl     ",5)
  let lamorghini = new Vehicle("Lamborghini Aventador      ","Automatic  ","760 bhp","7.69 kmpl    ",2)
  let mercedes =   new Vehicle("Mercedes-Benz AMG GT       ","Automatic  ","476 bhp","8.77 kmpl    ",5)
  let audi =       new Vehicle("Audi e-tron GT             ","Automatic  ","523 bhp","388 km/charge",5)

  const arrayOfVehicles = [ferrari, mclaren, lamorghini, mercedes, audi];
  console.log(`Traversing array of vehicles
  ---------------------------------------------------`);
  for (const vehicle of arrayOfVehicles) {
    vehicle.show();
  }
  console.log(`----------------------------------- Step 2 --------------------------------------`);
  class College {
    constructor (stuName,branch,year,cgpa,){
        this.stuName =stuName;
        this.branch =branch;
        this.year= year;
        this.cgpa= cgpa;
    }
    display(){
        console.log(`Student Name is : ${this.stuName} , Branch : ${this.branch} , Year: ${this.year} , CGPA : ${this.cgpa}
        `);
      }
       
  }
  let ram =     new College("Ram    "," Mechanical", 4  ,8.68)
  let shyam =   new College("Shyam  "," CSE       ", 4  ,8)
  let radha =   new College("Radha  "," Civil     ", 4  ,9.32)
  let krishna = new College("Krishna"," Mechanical", 4  ,9.38)
  ram.display()
  shyam.display()
  radha.display()
  krishna.display()
  console.log(`----------------------------------- Step 3 --------------------------------------`);
 
  traverseObject = function(arg){
    for (const key in arg) {
        if (College.hasOwnProperty.call(arg, key)) {
            const element = arg[key];
            console.log(`Key: ${key}, value : ${element}`);
        }
    }
}
traverseObject(ram)


// let student = {
//     rollNumber: 2233,
//     state: "MH",
//     city: "Pune",
//     college: "COEP Pune"
// }

// let keysStudent = Object.keys(student);
// console.log(keysStudent);
// let valuesStudent = Object.values(student);
// console.log(valuesStudent);

// console.log(`----------Traversing an object ------------ `);
// for (const key in student) {
//     if (Object.hasOwnProperty.call(student, key)) {
//         const element = student[key];
//         console.log(`Key: ${key}, value : ${element}`); 
//     }
// }