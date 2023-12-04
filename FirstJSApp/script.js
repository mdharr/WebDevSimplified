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

// let a = 1;
// const b = "Hello";

// console.log(b + a);

// function run() {
//     let count = 0;
//     while(count <= 100) {
//         if(count % 3 == 0 && count % 5 == 0) {
//             console.log("FizzBuzz");
//         } else if(count % 3 == 0) {
//             console.log("Fizz");
//         } else if(count % 5 == 0) {
//             console.log("Buzz");
//         } else {
//             console.log(count);
//         }
//         count++;
//     }
// }

// FizzBuzz
// const run = () => {
//     let count = 0;
//     while(count <= 100) {
//         count % 3 == 0 && count % 5 == 0 ?
//         console.log("FizzBuzz") :
//         count % 3 == 0 ?
//         console.log("Fizz") :
//         count % 5 == 0 ?
//         console.log("Buzz") :
//         console.log(count)
//         count++
//     }
// }

// run();

// Fibonacci
// function fibonacci(n) {
//     const fib = [0,1];
//     for(let i = 2; i < n; i++) {
//         fib[i] = fib[i-1] + fib[i-2];
//     }
//     return fib;
// }

// console.log(fibonacci(5));

// first approach (crash at 100000000, 1721ms at 10000000)
// function fibonacci(n) {
//     let fib = [0, 1];
//     for(let i = 2; i < n; i++){
//         fib[i] = fib[i-1] + fib[i-2];
//     }
//     return fib;
// }

// function fibonacci(n) {
//     let fib = [0,1];
//     for(let i = 2; i < n; i++) {
//         fib[i] = fib[i-1] + fib[i-2];
//     }
//     return fib;
// }

// Using a Pair of Variables (38826ms at 10000000000)
// function fibonacci(n) {
//     let a = 0, b = 1, temp;
//     for (let i = 2; i < n; i++) {
//         temp = a + b;
//         a = b;
//         b = temp;
//     }
//     return b;
// }

// Recursive Approach (stack overflow)
// function fibonacci(n) {
//     if (n <= 1) {
//         return n;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// Dynamic Programming with Memoization (stack overflow)
// function fibonacci(n, memo = { 0: 0, 1: 1 }) {
//     if (n in memo) {
//         return memo[n];
//     }
//     memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
//     return memo[n];
// }

// Iterative Approach with a Sliding Window (3834ms at 1000000000, 38074ms at 10000000000)
// function fibonacci(n) {
//     if (n <= 1) return n;
//     let lastTwo = [0, 1];
//     for (let i = 2; i <= n; i++) {
//         let nextFib = lastTwo[0] + lastTwo[1];
//         lastTwo[0] = lastTwo[1];
//         lastTwo[1] = nextFib;
//     }
//     return lastTwo[1];
// }

// const startTime = Date.now();
// console.log("Starting Time: ", startTime);

// let fibonacciNums = fibonacci(100);
// console.log("Fibonacci Result: ", fibonacciNums);
// let sortedFibonacci = fibonacciNums.sort((a,b) => a % 2 == 0 ? a - b : b - a);
// console.log("Sorted Results: ", sortedFibonacci);

// const endTime = Date.now();
// console.log("Ending Time: ", endTime);

// const duration = endTime - startTime;
// console.log("Time Taken (in milliseconds): ", duration);

// console.log("Starting Time Gen Nums: ", Date.now());
// const startTime = Date.now();
// let numsArray = [];
// generateNumbers();
// console.log(numsArray);

// const endTime = Date.now();
// console.log("Ending Time Gen Nums: ", endTime);

// const duration = endTime - startTime;
// console.log("Time Taken (in milliseconds) to Gen Nums: ", duration);

// function generateNumbers() {
//     for(let i = 0; i <= 100000; i++) {
//         numsArray[i] = parseInt(Math.random() * i);
//     }
// }

// function sortNums(numbers) {
//     let sortedNumbers = numbers.sort((a, b) => b - a)
//     console.log(sortedNumbers);
// }

// //start
// console.log("Starting Time Sort Nums: ", Date.now());
// const sortStartTime = Date.now();

// sortNums(numsArray);

// // finish
// const sortEndTime = Date.now();
// console.log("Ending Time Sort Nums: ", sortEndTime);

// const sortDuration = sortEndTime - sortStartTime;
// console.log("Time Taken (in milliseconds) to Gen Nums: ", sortDuration);

// generate numbers function
// function generateNumbers(n) {
//     let numsArray = [];
//     for (let i = 0; i < n; i++) {
//         numsArray[i] = parseInt(Math.random() * n);
//     }
//     return numsArray;
// }

// // merge sort logic
// function mergeSort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }

//     // Divide the array in half
//     const middle = Math.floor(arr.length / 2);
//     const left = arr.slice(0, middle);
//     const right = arr.slice(middle);

//     // Use recursion to combine the left and right
//     return merge(mergeSort(left), mergeSort(right));
// }

// // Merge two sorted arrays
// function merge(left, right) {
//     let resultArray = [], leftIndex = 0, rightIndex = 0;

//     // Concatenate values into resultArray in order
//     while (leftIndex < left.length && rightIndex < right.length) {
//         if (left[leftIndex] < right[rightIndex]) {
//             resultArray.push(left[leftIndex]);
//             leftIndex++; // move left array cursor
//         } else {
//             resultArray.push(right[rightIndex]);
//             rightIndex++; // move right array cursor
//         }
//     }

//     // Concatenate remaining elements
//     // (if left/right array still has elements)
//     return resultArray
//             .concat(left.slice(leftIndex))
//             .concat(right.slice(rightIndex));
// }

// const startTime = Date.now();
// console.log("Starting Time: ", startTime);

// let generatedNumbers = generateNumbers(100000);
// console.log("Numbers Result: ", generatedNumbers);
// let sortedNumbers = mergeSort(generatedNumbers);
// // let sortedNumbers = generatedNumbers.sort((a,b) => a - b);
// console.log("Sorted Results: ", sortedNumbers);

// const endTime = Date.now();
// console.log("Ending Time: ", endTime);

// const duration = endTime - startTime;
// console.log("Time Taken (in milliseconds): ", duration);

// const a = parseInt("asdfasdf");
// const b = 1;

// console.log(a);
// console.log(isNaN(a));

// const a = [
//     ["hi", "bye"],
//     [1, 2]
// ]

// console.log(a);
// console.log(a[0]);
// console.log(a[0][0]);

// const a = ["a", "b", "c", "d", "e"];

// let middle = a.length / 2;
// let leftHalf = a.slice(0, middle);
// let rightHalf = a.slice(middle);
// let middleElement = rightHalf[0];
// console.log("The midpoint should be: ", middleElement);

// const a = [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15]
// ];

// console.log(a[0][3]);
// console.log(a[1][2]);
// console.log(a[2][0]);

// let person = { 
//     name: "Michael", 
//     age: 35, 
//     favoriteNumber: 53,
//     sayHi: function () {
//         console.log(person.name + " says hi!");
//     },
//     sayHi2() {
//         console.log(person.name + " says hello!");
//     },
//     property: "value"
// }

// console.log(person);
// console.log(person.name);
// person.sayHi();
// person.sayHi2();

// let car = {
//     make: "Chevrolet",
//     model: "Corvette",
//     isUsed: true,
//     makeNoise() {
//         return "Vroooooom!";
//     }
// }

// console.log(car["make"]);

// console.log(car.make + " " + car.model + "s are very fun to drive. Especially if they are " + `${car.isUsed ? 'used' : 'new'}. ` + "I love the " + car.makeNoise() + " sound they make when you go fast.");

// let person = {
//     name: "Michael",
//     hobbies: ["Gaming", "Programming"],
//     address: {
//         street: "12345 Main Street",
//         city: "Somewhere"
//     }
// }

// console.log(person);

// let book = {
//     title: "Swords and Deviltry",
//     author: {
//         name: "Fritz Leiber",
//         age: "Deceased"
//     }
// }

// console.log(`The title of the book I chose is ${ book.title }, which was written by ${book.author.name}. The author is ${ book.author.age === 'Deceased' ? 'deceased.' : book.author.age + ' years old.' }`);

// let a = 10;
// let b = "Hi";
// let c = { name: "Michael" };
// let d = c;
// d.name = "Aaron"

// console.log("a = " + JSON.stringify(a));
// console.log("b = " + JSON.stringify(b));
// console.log("c = " + JSON.stringify(c));
// console.log("d = " + JSON.stringify(d));

// const only cares if you are trying to change the
// location where an object lives in memory, not
// the values inside of the array. As long as you do
// not try and redefine the array using the =
// operator, the address/location of the array 
// object in memory does not change
// const a = [1, 2]; // 0x01
// const b = [1, 2]; // 0x02
// a.push(3);

// equates to false because the values being compared
// are the address/location where each array object
// lives in memory
// console.log(a === b);
// console.log(a);
// console.log(b);

// const a = [1, 2];
// const elementToAdd = 3;

// add(a, elementToAdd);

// console.log(a);
// console.log(elementToAdd);

// function add(array, element) {
//     // element is just a copy of the number
//     // while array is a reference to an actual object
//     // stored in memory, that is why the elementToAdd
//     // value does not change when the function is
//     // called, but the array is, because a is a
//     // reference to a location.
//     element = element + 1;
//     array.push(element);
// }

// const a = [1, 2, 3, 4, 5];
// const b = [1, 2];

// forEach (index parameter is optional)
// loops through all elements and do what you want
// does not return anything
// a.forEach((item, index) => {
//     console.log(`Item: ${item}, Index: ${index}`);
// });

// map
// creates and returns a new array 
// (does not modify original)
// const newA = a.map(item => {
//     return item * 2;
// });

// console.log(newA);

// filter loops through all elements and filter
// down list into a new list of elements that we want
// does not modify original
// const newA = a.filter(item => {
//     return item > 2;
// });

// console.log(newA);

// returns first single element that returns true
// based on requirements
// const n = a.find(item => {
//     return item > 2;
// });

// console.log(n);

// do some elements match the equation?
// const isTrue = a.some(item => {
//     return item > 8;
// });

// console.log(isTrue);

// does every element match the equation?
// const isTrue = a.every(item => {
//     return item > 0;
// });

// console.log(isTrue);

// Reduces array down to a single value or object
// based on the requirements. The first parameter
// is what holds the values throughout the operation
// also known as the accumulator. The second param
// refers to each element in the array. Do not forget
// to initialize the accumulator after the closing
// curly brace.
// const total = a.reduce((sum, number) => {
//     return sum + number;
// }, 0);

// console.log(total);

// const items = [
//     { price: 10 },
//     { price: 20 },
//     { price: 14 },
//     { price: 1 },
//     { price: 6 }
// ];

// const total = items.reduce((sum, item) => {
//     return sum + item.price;
// }, 0);

// console.log(total);

// const a = [1, 2, 3, 4, 5];

// const isTrue = a.includes(2);

// console.log(isTrue);

// sort modifies the original, so you must use spread
// operator inside of square brackets in order to
// make copy of original if you do not wish for the
// original to be sorted as well
// let sortedA = [...a].sort((a, b) => {
//     return b - a;
// });

// console.log(a);
// console.log(sortedA);

// let a = "Hello";
// let b = "World"

// console.log(`${a} ${b}`);

// let firstName = "Michael";
// let lastName = "Harrington";

// console.log(`${firstName} ${lastName}`);

function createUser(name, age) {
    return { name: name, age: age }
}

// const user = createUser("Michael", 35);
// console.log(user);
// const date = new Date();
// console.log(date.getMonth());

// function User(name, age) {
//     this.name = name;
//     this.age = age;
//     this.human = true;
// }

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
    }

    printName() {
        console.log(this.name);
    }
}

const user = new User("Michael", 35);
const userFunc = createUser("Aaron", 10);
user.printName();
console.log(userFunc);
