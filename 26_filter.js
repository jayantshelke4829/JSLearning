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

const arrayEmps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi]
const array1 = arrayEmps.filter(num=>num.emp_company=="Wipro")
.map(num=>console.log(`The employee Details are : ${num.emp_id}, ${num.emp_name}, ${num.emp_dept}, ${num.emp_salary}, ${num.emp_company}`))


console.log(`----------------------------------------- step 2 -------------------------------------`);

const array2 = arrayEmps.filter(num=>num.emp_dept=="IT" || num.emp_dept=="HR")
.map(num=>console.log(`The employee Details are : ${num.emp_id}, ${num.emp_name}, ${num.emp_dept}, ${num.emp_salary}, ${num.emp_company}`))

console.log(`----------------------------------------- step 3 -------------------------------------`);

const array3 = arrayEmps.filter(num=>num.emp_id>50)
.map(num=>console.log(`The employee Details are : ${num.emp_id}, ${num.emp_name}, ${num.emp_dept}, ${num.emp_salary}, ${num.emp_company}`))

console.log(`----------------------------------------- step 4 -------------------------------------`);

const array4 = arrayEmps.filter(num=>num.emp_name.startsWith('A')||num.emp_name.startsWith('V')||num.emp_name.startsWith('M'))
.map(num=>console.log(`The employee Details are : ${num.emp_id}, ${num.emp_name}, ${num.emp_dept}, ${num.emp_salary}, ${num.emp_company}`))

console.log(`----------------------------------------- step 5 -------------------------------------`);

const array5 = arrayEmps.map(num=>num.emp_salary)
.reduce((num1,num2)=>{
    return num1+num2
})
console.log(`The average salary of all department is ${array5/arrayEmps.length}`);

console.log(`----------------------------------------- step 6 -------------------------------------`);

const arrayIT = arrayEmps.filter(num=>num.emp_dept=='IT')
.map(num=>num.emp_salary)
const array6=arrayIT.reduce((num1,num2)=>{
    return num1+num2
})
console.log(`The average salary of all department is ${array6/arrayIT.length}`);
