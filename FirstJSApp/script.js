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

// const promise = new Promise((resolve, reject) => {
//     const sum = 1 + 1

//     if (sum === 2) {
//         resolve('Success')
//     } else {
//         reject('Error')
//     }
// })

// promise.then(message => {
//     console.log(message)
// }).catch(message => {
//     console.error(message)
// })

// setTimeout(() => {
//     console.log('here')
// }, 250)

// setTimeoutPromise(250).then(() => {
//     console.log("1")
//     return setTimeoutPromise(250)
// })
// .then(() => {
//     console.log("2")
//     return setTimeoutPromise(500)
// })
// .then(() => {
//     console.log("3")
// })

// function setTimeoutPromise(duration) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, duration)
//     })
// }

// Create a promise version of addEventListener

// const button = document.querySelector('button')

// function addEventListenerPromise(element, method) {
//     return new Promise((resolve, reject) => {
//         element.addEventListener(method, resolve)
//     })
// }

// addEventListenerPromise(button, 'click').then(e => {
//     console.log('clicked')
//     console.log(e)
// })

// Promise.allSettled([
//     Promise.resolve('1'),
//     Promise.reject('Error on 2'),
//     Promise.resolve('3'),
// ]).then(messages => {
//     console.log(messages)
// }).catch(error => {
//     console.error(error)
// })

// const promise = Promise.resolve("here")

// promise
//     .then(message => {
//         console.log(message)
//     })
//     .catch(error => {
//         console.error(error)
//     })
//     .finally(() => {
//         console.log("finally")
//     })

// function setTimeoutPromise(delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`You waited ${delay} milliseconds`)
//         }, delay)
//     })
// }

// setTimeoutPromise(250).then(message => {
//     console.log(message)
//     console.log("1")
//     return setTimeoutPromise(250)
// }).then(message => {
//     console.log(message)
//     console.log("2")
// })

// async function doStuff() {
//     try {
//         console.log('before error')
//         const message = await setTimeoutPromise(250)
//         console.log('after error')
//         console.log(message)
//         console.log("1")
//         const message2 = await setTimeoutPromise(250)
//         console.log(message2)
//         console.log("2")
//     } catch (error) {
//         console.error(error)
//     }

// }

// doStuff()



// .then .catch version of fetch
// function fetchUserData(userId) {
//     fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then(userData => {
//             console.log(userData);
//             // Process userData here
//             // For example, you can display user data in the HTML
//         })
//         .catch(error => {
//             console.error('Error fetching user data:', error);
//         });
// }

// document.getElementById('fetchButton').addEventListener('click', () => {
//     const userId = document.getElementById('userIdInput').value;
//     fetchUserData(userId);
// });

// async/await version of fetch
// async function fetchUserData(userId) {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const userData = await response.json();
//         console.log(userData);
//         // Process userData here
//         // For example, you can display user data in the HTML
//     } catch (error) {
//         console.error('Error fetching user data:', error);
//     }
// }

// document.getElementById('fetchButton').addEventListener('click', () => {
//     const userId = document.getElementById('userIdInput').value;
//     fetchUserData(userId);
// });
// const characterInfoContainer = document.querySelector('#character-info')

// async function fetchCharacterData() {
//     try {
//         const randomId = getRandom()
//         const response = await fetch(`https://rickandmortyapi.com/api/character/${randomId}`);

//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const characterData = await response.json();
//         console.log(characterData);
//         showCharacterData(characterData)
//         // Process userData here
//         // For example, you can display user data in the HTML
//     } catch (error) {
//         console.error('Error fetching character data:', error);
//     }
// }

// document.getElementById('fetchButton').addEventListener('click', () => {
//     clearCharacterData()
//     const characterId = document.getElementById('characterIdInput').value;
//     fetchCharacterData(characterId);
// });

// document.getElementById('characterIdInput').addEventListener('keydown', function(event) {
//     if (event.key === 'Enter') {
//         clearCharacterData()
//         const characterId = document.getElementById('characterIdInput').value;
//         fetchCharacterData(characterId);
//     }
// });


// function showCharacterData(data) {
//     if(data != null) {
//         const name = data.name
//         const image = data.image
//         const episodes = data.episode
//         const nameElement = document.createElement('p')
//         const imageElement = document.createElement('img')
//         const episodesList = document.createElement('ul')
//         nameElement.textContent = name
//         imageElement.src = image
//         characterInfoContainer.appendChild(nameElement)
//         characterInfoContainer.appendChild(imageElement)
//         // characterInfoContainer.appendChild(episodesList)
//         // episodesList.style.listStyle = 'none'
//         // episodesList.style.padding = 0
//         // episodes.forEach(episode => {
//         //     const episodeListItem = document.createElement('li')
//         //     episodeListItem.textContent = episode.replace(/[^0-9]/g, '')
//         //     episodesList.appendChild(episodeListItem)
//         // })
//     }
// }

// function clearCharacterData() {
//     while(characterInfoContainer.firstChild) {
//         characterInfoContainer.removeChild(characterInfoContainer.firstChild)
//     }
// }

// function getRandom() {
//     return parseInt(Math.random() * 826) + 1;
// }


// warmup
// console.log('Program started')

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Program complete');
//     }, 3000);
// })

// console.log(myPromise)
// console.log("Program in progress...")

// myPromise.then((value) => {
//     console.log(value)
// })


// exercise 1
// console.log('Program started')

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve()
//     }, 3000)

//     setTimeout(() => {
//         reject()
//     }, 2000)
// })

// console.log(myPromise)
// console.log("Program in progress...")

// myPromise
//     .then(() => {
//         console.log("Program complete")
//     })
//     .catch(() => {
//         console.log("Program failure")
//     })

// exercise 2
// console.log("Program started")

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve()
//     }, 3000)
// })

// console.log(myPromise)
// console.log("Program in progress...")

// myPromise.then(() => {
//     console.log("Step 1 complete")

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Step 2 Complete')
//         }, 3000)
//     })
// }).then((value) => {
//     console.log(value)
//     console.log(myPromise)
// })

// exercise 3
// console.log("Program started")
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({data: "Hello, friend!", error: null})
//     }, 5000)
// })

// console.log(myPromise)
// console.log("Program in progress...")

// myPromise.then((value) => {
//     console.log(value)
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("First promise chain complete!")
//         }, 2000)
//     })
// }).then((value) => {
//     console.log(value)
// })

// myPromise.then((value) => {
//     console.log(value)
//     console.log(myPromise)
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Second promise chain complete!")
//         }, 10000)
//     })
// }).then((value) => {
//     console.log(value)
// })

// bonus
console.log("Program started")
const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10)
    }, 3000)
})
console.log(firstPromise)

const secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(20)
    }, 5000)
})
console.log(secondPromise)
console.log("Program in progress...")

firstPromise.then(value => {
    console.log("First promise chain complete!")
    console.log(firstPromise)
    return value
})

secondPromise.then(value => {
    console.log("Second promise chain complete!")
    console.log(secondPromise)
    return value
})

Promise.all([firstPromise, secondPromise]).then((values) => {
    console.log("All promise chains complete!")
    const [firstResult, secondResult] = values
    console.log("Sum:", (firstResult + secondResult))
})
