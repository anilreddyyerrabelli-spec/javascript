// Q1: What is the difference between var, let, and const?
//var can be redeclared and reassigned,let can be reassigned and but cannot redeclare const cannot be redeclare and reassigned

//### Q2: Can you re-declare a variable with var? What about let and const?

//yes we can redeclare a variable let and const we cannot redeclare

//### Q3: What is the output of this code?
//```javascript
//var x = 5;
//let y = 10;
//const z = 15;

//x = 20;
//y = 25;
//z = 30;

//console.log(x, y, z);

//there will be a error in the console because z was declared by using const

### Q4: What is the difference between declaring and initializing a variable?

//declaration means declaring a variable with out value is called declaration
//initialization means giving a value to variable


//### Q5: What will be the output?
//```javascript
//let a;
//console.log(a);

 //undefined

//### Q6: What is hoisting? Give an example

//certain declarations before excuting the code 
//console.log(x)
//x=10

//### Q7: What is the difference between null and undefined?
//undefined means value not assigned 
//null means empty value

//### Q8: What will be the output?
//javascript
//console.log(typeof null); object
//console.log(typeof undefined);undefned
//console.log(typeof []); object
//console.log(typeof {}); object




//## 📌 Operators (Questions 9-14)



### Q9: What is the difference between == and ===?
//== campares values and perform type convertion
//=== compares values and datatypes

//### Q10: What is the difference between ++i and i++?

//preincrement first increases the value and use
//postincrement first use the value then increases

//### Q11: What will be the output?
//javascript
//let x = 10;
//let y = "5";
//console.log(x + y); 105
//console.log(x - y);5
//console.log(x * y);50
//console.log(x / y);2


//### Q12: What are logical operators? Explain with examples.

//Logical operators or AND & OR & NOT
//console.log(10>5 && 15<20)
//console.log(10 > 5 || 20 < 10);
// console.log(10 > 5 && 20 < 10);
//console.log(!(10 > 5));


//### Q13: What will be the output?

//console.log(5 > 3 && 10 > 5);True
//console.log(5 > 10 || 10 > 5);True
//console.log(!(5 > 3));False


//### Q14: What is the ternary operator? Give an example.
//The ternary operator is short way of writing if else

//let age = 20;

//let result = age >= 18 ? "Adult" : "Minor";

//console.log(result);

//## 📌 Type Casting (Questions 15-17)

//### Q15: What is the difference between implicit and explicit type casting?
//javascript converts automatically
//converts manually

//### Q16: What will be the output?

//console.log(Number("123")); 123
//console.log(Number("hello")); Nan
//console.log(Number(true));1
//console.log(Number(false));0
//console.log(Boolean(0));false
//console.log(Boolean("hello"));true


//### Q17: What is NaN? Give an example.

//It is mathematcal operation cannot produce a numeric result
//let x = Number("hello");

//console.log(x);

//## 📌 Conditional Statements (Questions 18-21)

//### Q18: What is the difference between if-else and switch?
//let age = 20;

//if(age >= 18) {
 //   console.log("Adult");
//} else {
 //   console.log("Minor");
//}

//let day = 2;

//switch(day) {
    //case 1:
      //  console.log("Monday");
       // break;

    //case 2:
      //  console.log("Tuesday");
      //  break;

   // default:
       // console.log("Invalid");
//}

//### Q19: What will be the output?

//let age = 20;
//if(age >= 18) {
  //  console.log("Adult");
//} else {
  //  console.log("Minor");
//}
Adult

### Q20: What is nested if? Give an example.

//An if statement inside another if statement is called nested if.

//let age = 20;
//let hasID = true;

//if(age >= 18) {

  //  if(hasID) {
    //    console.log("Entry allowed");
    //}

//}

//### Q21: Write a program to check if a number is even or odd using ternary operator.

//let num = 10;

//let result = num % 2 === 0 ? "Even" : "Odd";

//console.log(result);

## 📌 Loops (Questions 22-25)

//### Q22: What is the difference between while and do-while?
//whle loop excute we dont now you how many times we will iterate
//let i = 1;

//while(i <= 3) {
   // console.log(i);
   // i++;
//}

//code excutes atleast once then checks the condition
//let i = 10;

//do {
    //console.log(i);
    //i++;
//} while(i <= 3);



//### Q23: What will be the output?
//for(let i = 1; i <= 5; i++) {
   // console.log(i);
//}
//1
//2
//3
//4
//5

//### Q24: What is the difference between for-of and for-in?
//let fruits = ["Apple", "Banana", "Mango"];

//for(let fruit of fruits) {
  //  console.log(fruit);
//}

//let fruits = ["Apple", "Banana", "Mango"];

//for(let index in fruits) {
  //  console.log(index);
//}
//### Q25: Write a program to find sum of numbers from 1 to 100.

//let sum = 0;

//for(let i = 1; i <= 100; i++) {
  //  sum = sum + i;
//}

//console.log(sum);

//## 📌 Arrays (Questions 26-27)

//### Q26: What is the difference between slice and splice?
//Returns a portion of an array but does not change the original array.
//Can add, remove, or replace elements and changes the original array.

//### Q27: What will be the output?

//let arr = [1, 2, 3]; [1,2,3,4]
//arr.push(4);
//arr.pop();[1,2,3]
//arr.unshift(0);[0,1,2,3]
//arr.shift();[1,2,3]
//console.log(arr);[1,2,3]


## 📌 Functions (Questions 28-30)

//### Q28: What is the difference between function declaration and function expression?
//function greet() {
    //console.log("Hello");
//}

//greet();

//let greet = function() {
    //console.log("Hello");
//};

//greet();

//### Q29: What is an arrow function? Give an example.
//an arrow function is a shorter function

//const add = (a, b) => {
 //   return a + b;
//};

//### Q30: What will be the output?
`
//function greet() {
    return "Hello";
//}
//let message = greet();
//console.log(message);
// Hello
