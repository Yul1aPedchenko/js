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