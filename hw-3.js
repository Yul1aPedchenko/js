'use strict';
//1
let result = 5 + 5 + "5";
console.log(result);
console.log(typeof result);

//2
let email = "pedcenkoulia2@gmail.com";
console.log(email.includes("@"));
console.log(email.length);

//3
const one = 'My';
const two = 'name';
const three = 'is';
const fullName = `${one} ${two} ${three} Victor`;
console.log(fullName);

//4
const userName = 'Yul';
const payment = 300;
alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);