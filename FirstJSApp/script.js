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

const number = 5;

switch(number) {
    case 0:
        console.log("it is zero")
        break
    case 1:
    case 2:
        console.log("it is small")
        break
    case 3:
    case 4:
        console.log("it is medium")
        break
    case 5:
        console.log("it is large")
        break
    default:
        console.log("try again")
}