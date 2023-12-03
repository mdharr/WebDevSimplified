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

let c = 3;

{
    let a = 1;

    {
        let b = 2;
        console.log(a);
        console.log(b);
        console.log(c);
    }
}

function sum(a, b) {
    console.log(a + b);
}

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
