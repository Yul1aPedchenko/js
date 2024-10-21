"use strick";
//1
console.log("task 1:");
let number = 1;
while (number < 10) {
    console.log(number);
  number += 1;
}

//2
console.log("task 2:");
for (let i = 2; i <= 20; i += 1) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

//3
console.log("task 3:");
for (let i = 1; i <= 10; i += 1) {
  console.log(`7 x ${i} = ${7 * i}`);
}

//6
console.log('task 6');
const n = 4;
for (let i = 0; i < n; i += 1) {
  if (i >= n) {
    break;
  }
  console.log(i);
}

//7
console.log('task 7');
let a = 1;
while (a <= 20) {
  if (a % 3 === 0) {
    a += 1;
        continue;
    }
  console.log(a);
  a += 1;
}

