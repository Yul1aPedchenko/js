"use strict"
//1
const age = 14;
console.log(age);
//2
//Воно name в console.log перекреслило, тому змінила назву
const myName = "Yulia";
console.log(myName);
//3
const myNumber = 17;
let plus = myNumber + 10;
console.log(plus)
//4
const isStudent = true;
console.log(isStudent);
//5
const myString = "Просто Юл.";
console.log(myString);
//6
const myNull = 0;
console.log(myNull);
//7
const user = prompt(`Введіть своє імʼя`);
alert(`Привіт ${user}!`);
//8
const change = confirm(`Та чи нє?`);
if (change === true) {
  alert("Дякую за підтвердження!");
} else {
  alert("Дію відмінено!");
}
//9
alert(`Дія небезпечна!`);
const danger = confirm(`Дія небезпечна, ви точно хочете підтвердити?`);

if ( danger === true) {
  alert("Дякую за підтвердження!");
} else {
  alert("Дію відмінено!");
}


//hw-2

//1
const c = 17;
const f = 1.8 * c + 32;
console.log(f);

//2
const days = 30;
const hours = days * 24;
const minute = hours * 60;
console.log(hours);
console.log(minute);

//3
let hp = 200;
let energy = 200;
hp -= 40;
energy -= 70;
console.log(hp);
console.log(energy);

//4
let price = 4200;
let sell = price / 100 * 90;
console.log(sell);


//5
const v = 3.14;
console.log(Math.floor(v));

//6
const t = '3.14pii12';
console.log(parseFloat(t));

//7
const d = '3.1111ppppp';
console.log(parseInt(d));

//8
const b = 16;
console.log(Math.sqrt(b));

//9
const j = 10;
const g = '12ppp';
console.log(parseInt(g));
console.log(j.toString());


//hw-3


<!--  -->
// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// console.log(likes);

// const likes = tweets => tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// console.log(likes(tweets));

// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);
//   return allTags;
// }, []);
// console.log(tags);

// const tagsSum = (tweets) =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);
//     return allTags;
//   }, []);
// const tags = tagsSum(tweets);

// const tagsCount = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }
//   acc[tag] += 1;
//   return acc;
// };
// const totalTags = tags => tags.reduce(tagsCount, {});
// console.log(totalTags(tags));

// const numbers = [5, 6, 1, 3, 4, 2];
// console.log(numbers.sort());

// const names = ['Alex', 'nick', 'bob', 'john'];
// console.log(names.sort());

// const letters = [5, 6, 1, 3, 4, 2];
// console.log(letters.sort());
// const newLetters = letters.sort((curEl, nextEl) => {
//   return nextEl - curEl;
// });
// console.log(newLetters);

// const fruits = ["kiwi", "apple", "orange", "banana"];
// fruits.sort(function (cur, next) {
//   return cur.localeCompare(next);
// });
// console.log(fruits);

// const copy = [...fruits];
// console.log(copy);
// console.log(copy === fruits);

// const num = [5, 6, 1, 3, 4, 2];
// const result = num
//   .filter((x) => x % 2 === 0)
//   .map((y) => y * 3)
//   .reverse();
// console.log(result);



// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];

// const copyPlayers = [...players];
// copyPlayers.sort((a, b) => b.timePlayed - a.timePlayed);
// console.log(copyPlayers);

// const arr = [
//   { name: "John", age: 32 },
//   { name: "Jane", age: 26 },
//   { name: "Mike", age: 42 },
//   { name: "Emily", age: 29 },
// ];
// arr.sort((a, b) => {
//   if (a.name < b.name) {
//     return -1;
//   }
//   if (a.name > b.name) {
//     return 1;
//   }
//   return 0;
// });
// console.log(arr);


const products = [
  { name: "Product 1", price: 100, quantity: 5 },
  { name: "Product 2", price: 50, quantity: 10 },
  { name: "Product 3", price: 200, quantity: 2 },
  { name: "Product 4", price: 50, quantity: 5 },
];

products.sort((a, b) => {
  if (a.price !== b.price) {
    return b.price - a.price;
  }
  return a.quantity - b.quantity;
});
console.log(products);