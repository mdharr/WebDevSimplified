// function printVariable(variable) {
//     console.log(variable);
// }

// function func(x) {
//     x("hello world");
// }

// func(printVariable);

// function sumCallback(a, b, callback) {
//     callback(a + b);
// }

// function handleSum(sum) {
//     console.log(sum);
// }

// sumCallback(1, 2, handleSum);

// function printVariable(variable) {
//     console.log(variable);
// }

// function greeting(name, callback) {
//     callback("Hello " + name);
// }

// greeting("Michael", function (variable) {
//     console.log(variable);
// });

// function sum(a,b) {
//     return a + b;
// }

// let sumArrow = (a, b) => {
//     return a + b;
// }

// console.log(sumArrow(1,2));

// function printName(name) {
//     console.log(name);
// }

// let printNameArrow = (name) => {
//     console.log(name);
// }

// printNameArrow("Michael");

// function sum(a, b) {
//     return a + b;
// }

// let sumArrow = (a, b) => a + b;

// console.log(sumArrow(1,2));

// function printHi(name) {
//     return "Hi " + name;
// }

// let printHiArrow = (name) => "Hi " + name;

// console.log(printHiArrow("Michael"));

// let hi = () => console.log("Hi");

// hi();

// function func(x, callback) {
//     callback(x);
// }

// func(10, function(variable) {
//     console.log(variable);
// });

// let func = (x, callback) => callback(x);

// func(10, (variable) => console.log(variable));

// function doStuff(a, b, name) {
//     print(sum(a, b));
//     print(sayHi(name));
// }

// function print(variable) {
//     console.log(variable);
// }

// function sum(a, b) {
//     return a + b;
// }

// function sayHi(name) {
//     return "Hi " + name;
// }

// doStuff(1, 2, "Michael");

// console.log(sum(1, 2));

// function sum(a, b) {
//     return a + b;
// }

// let sum = (a, b) => a + b;

// function sayHi(name) {
//     let a = 2;
//     let result = "Hi " + name + a;
//     console.log(result);
// }

// let a = 1;
// sayHi("Michael");
// console.log(result);

// let c = 3;

// {
//     let a = 1;

//     {
//         let b = 2;
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
// }

// function sum(a, b) {
//     console.log(a + b);
// }

// {
//     let a = 2;
//     console.log(a);
// }

// {
//     let a = 3;
//     console.log(a);
// }

// let a = 4;
// console.log(a);

// let a = 15;

// {
//     let b = 22;
//     sum(a, b);
//     sumArrow(a, b);
// }

// let sumArrow = (a, b) => console.log(a + b);

// function sum(a, b) {
//     console.log(a + b);
// }

// function greeting(name) {
//     console.log("Good morning " + name);
// }

// let myName = "Aaron Zhou";

// greeting(myName);

// function print(variable) {
//     let c = 3;
//     return function func(variable2) {
//         console.log(variable);
//         console.log(variable2);
//         console.log(c);
//     }
// }

// let a = print(1);
// a(2);

// function greeting(name) {
//     let name2 = "Xinzi";
//     return function func(name3) {
//         console.log("Hello " + name + ", " + name2 + ", and " + name3);
//     }
// }

// let result = greeting("Michael");
// result("Aaron");

// let a = 1;
// const b = 2;

// a = 2;

// console.log(a);

// {
//     var a = 1;

// }

// console.log(a);

// console.log(a);

// var a = 1;

// console.log(a);

// number
// string 
// boolean 
// null 
// undefined 

// let a = "1";
// console.log("Before: " + typeof a);

// console.log(parseInt(a));

// console.log("After: " + typeof parseInt(a));

// let b = "1.3";
// console.log("Parsed float: " + parseFloat(b));

// let a = 1.34;

// console.log(typeof a.toString());

let a = 1;
const b = "Hello";

console.log(b + a);