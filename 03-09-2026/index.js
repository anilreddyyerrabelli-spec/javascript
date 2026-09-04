//Task1 for (let i = 1; i <= 10; i++) {
   // console.log(i);
//}

 //Task2for (let i = 10; i >= 1; i--) {
  //  console.log(i);
//}

 //Task3 for (let i = 1; i <= 20; i++) {
   // if (i % 2 === 0) {
      //  console.log(i);
    //}
//}

 //Task4 for (let i = 1; i <= 20; i++) {
    //if (i % 2 !== 0) {
    //    console.log(i);
    //}
//}


//Task5 let number = Number(prompt("Enter a number"));

//for (let i = 1; i <= 10; i++) {
  //  console.log(number + " x " + i + " = " + (number * i));
//}

//Task6 let i = 10;

//while (i >= 1) {
  //  console.log(i);
   // i--;
//}

//Task7 let i = 1;
//let sum = 0;

//while (i <= 10) {
   // sum = sum + i;
   // i++;
//}

//console.log(sum);

//Task8 let i = 1;

//do {
   // console.log(i);
   // i++;
//} while (i <= 5);

 //Task9 let a = 10;

//do {
   // console.log(a);
   // a++;
//} while (a <= 5);


 //Tas10 let name = "javascript";

//for (let character of name) {
   // console.log(character);
//}

//Task11 let fruits = ["apple", "orange", "banana", "mango", "grapes"];

//for (let fruit of fruits) {
  //  console.log(fruit);
//}

//Task12 let students = ["Arun", "Priya", "Rahul", "Sneha", "Kiran"];

//for (let student of students) {
   // console.log("Student: " + student);
//}

//Task13 let employee = {
   // name: "Arun",
   // age: 25,
    //role: "Developer",
    //city: "Chennai"
//};

//for (let key in employee) {
 //   console.log(key, employee[key]);
//}

// Task14 let product = {
    //productName: "Laptop",
    //price: 50000,
    //brand: "Dell",
    //category: "Electronics",
    //stock: 10
//};

//for (let key in product) {
   // console.log(key, product[key]);
//}

//Task15 function welcome() {
    //console.log("Welcome to JavaScript");
//}

//welcome();
//welcome();
//welcome();

//Task16 function greet(name) {
   // console.log("Hello " + name);
//}

//greet("Naveen");
//greet("Arun");
//greet("Priya");

//Task17 function student(name, age, department) {
  //  console.log("Name:", name);
    //console.log("Age:", age);
    //console.log("Department:", department);
//}

//student("Arun", 22, "CSE");
//student("Priya", 21, "ECE");
//student("Rahul", 23, "IT");


//Task18 function add(a, b) {
   // return a + b;
//}

//let result = add(10, 20);

//console.log(result);

//Task19function salary(amount) {
  //  return amount;
//}

//let result = salary(50000);

//console.log(result);

//Task20 function bonus(salary, bonusAmount) {
    //return salary + bonusAmount;
//}

//let total = bonus(50000, 5000);

//console.log(total);

//Task21 function employee(name, role = "Developer") {
    //console.log("Name:", name);
    //console.log("Role:", role);
//}

//employee("Arun");
//employee("Priya", "Designer");

//Task22 function square(number) {
   // return number * number;
//}

//console.log(square(2));
//console.log(square(3));
//console.log(square(4));
//console.log(square(5));
//console.log(square(10));

//Task23 let calculate = function(a, b) {
  //  return a + b;
//};

//console.log(calculate(10, 20));

//Task24 let multiply = (a, b) => {
 //   return a * b;
//};

//console.log(multiply(5, 10));


//Tas25 function test() {

   // if (true) {

     //   var a = 10;
       // let b = 20;
        //const c = 30;

        //console.log(a);
        //console.log(b);
        //console.log(c);
    //}

    //console.log(a);
    //console.log(b);
    //console.log(c);
//}

//test();

//Tas26 console.log(a);

//var a = 10;

//Task27 console.log(b);

//let b = 20;

//Task28 console.log(c);

//const c = 30;

//Task29(function() {
 //   console.log("Welcome to JavaScript");
//})();

//Tas30function welcome() {
    //console.log("Welcome");
//}

//function execute(callback) {
 //   callback();
//}

//execute(welcome);

//Task31 function* cashback() {
   // yield "10% cashback";
   // yield "20% cashback";
   // yield "30% cashback";
   // yield "Better luck next time";
//}

//let result = cashback();

//for (let value of result) {
    //console.log(value);
//}

let employees = [
    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },
    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    },
    {
        name: "Rahul",
        age: 27,
        department: "IT",
        role: "Tester",
        salary: 45000
    }
];


// 1. for...of
console.log("----- Employee Details -----");

for (let employee of employees) {
    console.log(employee);
}


// 2. for...in
console.log("----- Keys and Values -----");

for (let employee of employees) {

    for (let key in employee) {
        console.log(key + ":", employee[key]);
    }

    console.log("----------------");
}


// 3. Function to display employee information

function displayEmployee(name, age, department, role, salary) {

    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
    console.log("Role:", role);
    console.log("Salary:", salary);

}


// 4. Pass employee information to function

console.log("----- Display Using Function -----");

for (let employee of employees) {

    displayEmployee(
        employee.name,
        employee.age,
        employee.department,
        employee.role,
        employee.salary
    );

}


// 5. Return employee salary

function getSalary(employee) {
    return employee.salary;
}

console.log("----- Salaries -----");

for (let employee of employees) {

    let salary = getSalary(employee);

    console.log(employee.name + ":", salary);

}


// 6. Condition Salary >= 40000

console.log("----- Salary Check -----");

for (let employee of employees) {

    if (employee.salary >= 40000) {
        console.log(employee.name + " has salary >= 40000");
    } else {
        console.log(employee.name + " has salary < 40000");
    }

}


// 7. Arrow function

let calculateAnnualSalary = (salary) => {
    return salary * 12;
};

console.log("----- Annual Salary -----");

for (let employee of employees) {

    let annualSalary = calculateAnnualSalary(employee.salary);

    console.log(
        employee.name + ": " + annualSalary
    );

}


// 8. Generator for employee benefits

function* benefits() {

    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";

}

console.log("----- Employee Benefits -----");

let employeeBenefits = benefits();

for (let benefit of employeeBenefits) {
    console.log(benefit);
}