// const userIsLoggedIn = false;

// if(userIsLoggedIn) {
//     console.log("User logged in")   
// } 
// else {
//     console.log("Please login")
// }

// const dayOfWeek = new Date().getDay() === 0 ? 'Sunday' :
//                   new Date().getDay() === 1 ? 'Monday' :
//                   new Date().getDay() === 2 ? 'Tuesday' :
//                   new Date().getDay() === 3 ? 'Wednesday' :
//                   new Date().getDay() === 4 ? 'Thursday' :
//                   new Date().getDay() === 5 ? 'Friday' :
//                   'Saturday'

// if(dayOfWeek === 'Tuesday') {
//  console.log('It is Tuesday!')
// } else {
//     console.log(`It is not Tuesday, it is ${ dayOfWeek }`);
// }

// Create a variable that contains an array.
// Using an if statement with else if I want you to check the length
// of the array
// If it is empty print out "empty"
// If it has less than 5 elements print out "small"
// If it has less than 10 elements print out "medium"
// Otherwise print out "large"
// const myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// if(myArray.length === 0) {
//     console.log("empty")
// } else if(myArray.length < 5) {
//     console.log("small")
// } else if (myArray.length < 10) {
//     console.log("medium")
// } else {
//     console.log("large")
// }

// const isUserLoggedIn = true;

// const welcomeMessage = isUserLoggedIn ?
//                        'welcome' :
//                        'please log in'

// console.log(welcomeMessage);

// const favoriteAnimal = 'shark';

// switch (favoriteAnimal) {
//     case "cat":
//         console.log("cats are pretty cool")
//         break
//     case "dog":
//         console.log("dogs are cool too")
//         break
//     case "shark":
//         console.log("interesting choice")
//         break
//     default :
//         console.log("unfamiliar with that one")
// }

// const number = 5;

// switch(number) {
//     case 0:
//         console.log("it is zero")
//         break
//     case 1:
//     case 2:
//         console.log("it is small")
//         break
//     case 3:
//     case 4:
//         console.log("it is medium")
//         break
//     case 5:
//         console.log("it is large")
//         break
//     default:
//         console.log("try again")
// }
// const a = [['a', 'b'], ['b', 'c'], ['c', 'd']]

// for(let i = 0; i < a.length; i++) {
//     for(let j = 0; j < a[i].length; j++) {
//         console.log(a[i][j])
//     }
// }

// const a = [[['a', 'b'], ['c', 'd']], [['e', 'f'], ['g', 'h']], [['i', 'j'], ['k', 'l']]];

// for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < a[i].length; j++) {
//         for (let k = 0; k < a[i][j].length; k++) {
//             console.log(a[i][j][k]);
//         }
//     }
// }

// const aFlat = a.flat(2);
// console.log(aFlat);

// for(let i = 0; i <= 10; i++) {
//     if(i === 5) break
//     console.log(i);
// }

// for(let i = 0; i < 5; i++) {
//     console.log(i);
// }

// let i = 0;
// while(i < 5) {
//     console.log(i);
//     i++;
// }

// const person = {
//     name: "Michael",
//     friend: {
//         name: 'Aaron',
//         friend: {
//             name: 'Mom'
//         }
//     }
// }

// let currentPerson = person;
// while(currentPerson.friend != null) {
//     console.log(currentPerson.name)
//     currentPerson = currentPerson.friend
// }

// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     sum = sum + i
// }

// console.log(sum)


// function printNumber(n) {
//     if(n > 10) return
//     console.log(n);
//     printNumber(n + 1)
//     console.log(n)
// }

// printNumber(1)

// function sumNumbersBelow(number) {
//     if(number <= 0) return 0
//     return number + sumNumbersBelow(number - 1)
// }
    
// console.log(sumNumbersBelow(3))

// const person = {
//     name: "Michael",
//     friend: {
//         name: "Aaron",
//         friend: {
//             name: "Mom"
//         }
//     }
// }

// let currentPerson = person
// // while(currentPerson != null) {
// //     console.log(currentPerson.name)
// //     currentPerson = currentPerson.friend
// // }

// function printNames(currentPerson) {
//     if(currentPerson == null) return
//     console.log(currentPerson.name)
//     printNames(currentPerson.friend)
//     console.log("exiting from: " + currentPerson.name)
// }

// printNames(currentPerson)


// const person = {
//     name: "Kyle",
//     friend: {
//         name: "Joe",
//         friend: {
//             name: "Sally"
//         }
//     }
// }

// let currentPerson = person

// function printNames(currentPerson) {
//     if (currentPerson == null) return
//     console.log(currentPerson.name)
//     console.log('call recursion')
//     if (currentPerson.friend == null) console.log('no next person')
//     printNames(currentPerson.friend)
//     console.log('exiting ' + currentPerson.name)
//     currentPerson.recorded = true
// }
  
// printNames(person)
// console.log('Outside of function')

// printTrue() || printFalse();

// function printTrue() {
//     console.log("true")
//     return true;
// }

// function printFalse() {
//     console.log("false")
//     return false;
// }

// function printName(name) {
//     name = name || 'Default'
//     console.log(name)
// }

// printName()

// const person = {
//     name: "Michael",
//     address: {
//         street: "Main Street"
//     }
// }

// console.log(person && person.address && person.address.street)
// setTimeout(() => {
//     console.log("inside")
// }, 1000)

// console.log("outside")
// const button = document.querySelector('button')
// addClickEventListener(button, () => {
//     console.log('clicked')
// })

// function addClickEventListener(element, callback) {
//     element.addEventListener('click', callback)
// }