 //Task1let name = "Anil";
//let department = "Computer Science";

//let mark1 = 85;
//let mark2 = 90;
//let mark3 = 78;
//let mark4 = 92;
//let mark5 = 88;

//function calculateResult(name, department, mark1, mark2, mark3, mark4, mark5) {

    //let total = mark1 + mark2 + mark3 + mark4 + mark5;
    //let average = total / 5;

    //let result;
    //let grade;

    //if (average >= 50) {
      //  result = "Pass";
    //} else {
       // result = "Fail";
    //}

    //if (average >= 90) {
      //  grade = "A";
    //} else if (average >= 75) {
      //  grade = "B";
    //} else if (average >= 60) {
      //  grade = "C";
    //} else if (average >= 50) {
       // grade = "D";
    //} else {
      //  grade = "Fail";
    //}

    //console.log("Student Name:", name);
    //console.log("Department:", department);
    //console.log("Total Marks:", total);
    //console.log("Average:", average);
    //console.log("Result:", result);
    //console.log("Grade:", grade);
//}

//calculateResult(name, department, mark1, mark2, mark3, mark4, mark5);

 /*Task2let employee = {
    name: "Arun",
    role: "Developer",
    salary: 45000,
    experience: 2
};

function calculateSalary(employee) {

    let basicSalary = employee.salary;
    let bonus = 0;

    if (employee.experience >= 5) {
        bonus = basicSalary * 0.15;
    } else if (employee.experience >= 2) {
        bonus = basicSalary * 0.10;
    }

    let finalSalary = basicSalary + bonus;

    console.log("Employee Name:", employee.name);
    console.log("Role:", employee.role);
    console.log("Basic Salary:", basicSalary);
    console.log("Bonus:", bonus);
    console.log("Final Salary:", finalSalary);
}

calculateSalary(employee);

 Task3 let products = [
    { name: "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "Shoes", price: 2500, category: "fashion" },
    { name: "Phone", price: 30000, category: "electronics" }
];

// Products above ₹2,000
let above2000 = products.filter(function(product) {
    return product.price > 2000;
});

console.log("Products above ₹2,000:");
console.log(above2000);



let electronics = products.filter(function(product) {
    return product.category === "electronics";
});

console.log("Electronics Products:");
console.log(electronics);


let below1000 = products.find(function(product) {
    return product.price < 1000;
});

console.log("First Product Below ₹1,000:");
console.log(below1000);



let totalPrice = products.reduce(function(total, product) {
    return total + product.price;
}, 0);

console.log("Total Price:", totalPrice);


let anyAbove50000 = products.some(function(product) {
    return product.price > 50000;
});

console.log("Any Product Above ₹50,000:", anyAbove50000);


let everyAbove500 = products.every(function(product) {
    return product.price > 500;
});

console.log("Every Product Above ₹500:", everyAbove500);


 Task4 let employees = [
    {
        id: 101,
        name: "Kavin",
        role: "Frontend Developer",
        salary: 40000
    },
    {
        id: 102,
        name: "Arun",
        role: "Backend Developer",
        salary: 50000
    },
    {
        id: 103,
        name: "Priya",
        role: "UI Developer",
        salary: 45000
    },
    {
        id: 104,
        name: "Dinesh",
        role: "Manager",
        salary: 70000
    },
    {
        id: 105,
        name: "Ravi",
        role: "Tester",
        salary: 35000
    },
    {
        id: 106,
        name: "Karthi",
        role: "Developer",
        salary: 60000
    }
];



let employeeNames = employees.map(function(employee) {
    return employee.name;
});

console.log("Employee Names:");
console.log(employeeNames);



let highSalaryEmployees = employees.filter(function(employee) {
    return employee.salary > 40000;
});

console.log("Employees Earning Above ₹40,000:");
console.log(highSalaryEmployees);



let employee103 = employees.find(function(employee) {
    return employee.id === 103;
});

console.log("Employee with ID 103:");
console.log(employee103);



let totalSalary = employees.reduce(function(total, employee) {
    return total + employee.salary;
}, 0);

console.log("Total Salary:", totalSalary);



let highestPaid = employees.reduce(function(highest, employee) {
    if (employee.salary > highest.salary) {
        return employee;
    }

    return highest;
});

console.log("Highest Paid Employee:");
console.log(highestPaid);



let sortedEmployees = [...employees].sort(function(a, b) {
    return b.salary - a.salary;
});

console.log("Employees Sorted High to Low:");
console.log(sortedEmployees);



let namesOnly = employees.map(function(employee) {
    return employee.name;
});

console.log("Names Only:");
console.log(namesOnly)

Task5 let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];

function calculateCart(cart) {

    let total = cart.reduce(function(sum, item) {

        let itemTotal = item.price * item.quantity;

        console.log(item.name + " Total:", itemTotal);

        return sum + itemTotal;

    }, 0);

    let discount = 0;

    if (total > 50000) {
        discount = total * 0.10;
    }

    let finalAmount = total - discount;

    console.log("Total Cart Value:", total);
    console.log("Discount:", discount);
    console.log("Final Payable Amount:", finalAmount);
}

calculateCart(cart);

 Task6 let students = [
    { name: "Arun", age: 21, mark: 85 },
    { name: "Priya", age: 22, mark: 92 },
    { name: "Karthi", age: 20, mark: 67 },
    { name: "Dinesh", age: 23, mark: 45 }
];



let studentNames = students.map(function(student) {
    return student.name;
});

console.log("Student Names:");
console.log(studentNames);



let above80 = students.filter(function(student) {
    return student.mark > 80;
});

console.log("Students Above 80:");
console.log(above80);



let priya = students.find(function(student) {
    return student.name === "Priya";
});

console.log("Student Named Priya:");
console.log(priya);



let totalMarks = students.reduce(function(total, student) {
    return total + student.mark;
}, 0);

let averageMark = totalMarks / students.length;

console.log("Average Mark:", averageMark);



let anyoneFailed = students.some(function(student) {
    return student.mark < 50;
});

console.log("Anyone Failed:", anyoneFailed);



let everyoneAbove40 = students.every(function(student) {
    return student.mark > 40;
});

console.log("Everyone Scored Above 40:", everyoneAbove40);



let sortedStudents = [...students].sort(function(a, b) {
    return a.mark - b.mark;
});

console.log("Students Sorted By Marks:");
console.log(sortedStudents);

 Task7 let numbers = [12, 5, 8, 21, 44, 7, 30, 15];



let doubledNumbers = numbers.map(function(number) {
    return number * 2;
});

console.log("Numbers × 2:");
console.log(doubledNumbers);



let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});

console.log("Even Numbers:");
console.log(evenNumbers);



let greaterThan15 = numbers.filter(function(number) {
    return number > 15;
});

console.log("Numbers Greater Than 15:");
console.log(greaterThan15);



let firstGreaterThan20 = numbers.find(function(number) {
    return number > 20;
});

console.log("First Number Greater Than 20:");
console.log(firstGreaterThan20);



let total = numbers.reduce(function(sum, number) {
    return sum + number;
}, 0);

console.log("Total:", total);



let anyGreaterThan40 = numbers.some(function(number) {
    return number > 40;
});

console.log("Any Number Greater Than 40:", anyGreaterThan40);



let allPositive = numbers.every(function(number) {
    return number > 0;
});

console.log("Every Number Is Positive:", allPositive);



let sortedNumbers = [...numbers].sort(function(a, b) {
    return b - a;
});

console.log("Numbers High to Low:");
console.log(sortedNumbers);

 Task8 let sentence = prompt("Enter a sentence:");



console.log("Total Characters:", sentence.length);



console.log("Uppercase:", sentence.toUpperCase());



console.log("Lowercase:", sentence.toLowerCase());



console.log("Contains JavaScript:", sentence.includes("JavaScript"));



console.log("First Character:", sentence[0]);



console.log("Last Character:", sentence[sentence.length - 1]);



let words = sentence.split(" ");

console.log("Number of Words:", words.length);



let replacedSentence = sentence.replace("JavaScript", "Python");

console.log("After Replacement:", replacedSentence);



console.log("Sentence Array:", words);


Mini project let employees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];


// 1. Employee List
console.log("----- EMPLOYEE LIST -----");

employees.forEach(function(employee) {
    console.log(
        employee.id,
        employee.name,
        employee.department,
        employee.salary,
        employee.experience
    );
});


// 2. Search Employee by Name
let searchName = "Arun";

let searchedEmployee = employees.find(function(employee) {
    return employee.name.toLowerCase() === searchName.toLowerCase();
});

console.log("----- SEARCH RESULT -----");
console.log(searchedEmployee);


// 3. Department Filter
let department = "IT";

let departmentEmployees = employees.filter(function(employee) {
    return employee.department === department;
});

console.log("----- IT EMPLOYEES -----");
console.log(departmentEmployees);


// 4. Salary Filter
let salaryEmployees = employees.filter(function(employee) {
    return employee.salary > 50000;
});

console.log("----- EMPLOYEES ABOVE ₹50,000 -----");
console.log(salaryEmployees);


// 5. Calculate Total Company Salary
let totalSalary = employees.reduce(function(total, employee) {
    return total + employee.salary;
}, 0);

console.log("----- TOTAL COMPANY SALARY -----");
console.log("Total Salary: ₹" + totalSalary);


// 6. Find Highest Salary
let highestPaid = employees.reduce(function(highest, employee) {

    if (employee.salary > highest.salary) {
        return employee;
    }

    return highest;

});

console.log("----- HIGHEST PAID EMPLOYEE -----");
console.log(highestPaid);


// 7. Employees With More Than 3 Years Experience
let experiencedEmployees = employees.filter(function(employee) {
    return employee.experience > 3;
});

console.log("----- EXPERIENCE MORE THAN 3 YEARS -----");
console.log(experiencedEmployees);


// 8. Sort Salary Low to High
let lowToHigh = [...employees].sort(function(a, b) {
    return a.salary - b.salary;
});

console.log("----- SALARY LOW TO HIGH -----");
console.log(lowToHigh);


// 9. Sort Salary High to Low
let highToLow = [...employees].sort(function(a, b) {
    return b.salary - a.salary;
});

console.log("----- SALARY HIGH TO LOW -----");
console.log(highToLow);


// 10. Statistics

let totalEmployees = employees.length;

let averageSalary = totalSalary / totalEmployees;

console.log("----- STATISTICS -----");

console.log("Total Employees:", totalEmployees);
console.log("Total Salary: ₹" + totalSalary);
console.log("Highest Salary: ₹" + highestPaid.salary);
console.log("Average Salary: ₹" + averageSalary.toFixed(2));*/