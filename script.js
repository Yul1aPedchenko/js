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
