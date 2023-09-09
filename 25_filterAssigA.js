class Employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

console.log(`----------------------------------------- step 1 -------------------------------------`);

const arrayEmployes = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi]

const array1 = arrayEmployes.filter(num=>num.emp_company=="TCS")
.map(num=>console.log(num.emp_name,num.emp_company) )


console.log(`----------------------------------------- step 2 -------------------------------------`);

const arrayW = arrayEmployes.filter(num=>num.emp_company=="Wipro")
const array2 =arrayW.reduce((num1,num2)=>{
    return num1.emp_salary+num2.emp_salary
})
console.log(`Average salary of wipro employees is ${array2/arrayW.length}`);

console.log(`----------------------------------------- step 3 -------------------------------------`);

const arrayWI = arrayEmployes.filter(num=>num.emp_company=="Wipro" || num.emp_company=="Infy")
.map(num=>num.emp_salary)
const array3 =arrayWI.reduce((numA,numB)=>{
    return numA+numB
})
console.log(`Average salary of wipro or infy employees is ${array3/arrayWI.length}`);