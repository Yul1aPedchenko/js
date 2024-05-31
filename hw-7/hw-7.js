console.log('task 1');

const arr1 = [1, 2, 3];
arr1[1] = 10;
console.table(arr1);

// -----

console.log("task 2");

const arr2 = ['one', 'two', 'three'];
arr2[arr2.length] = 'four';
console.table(arr2);

// -----

console.log("task 3");

const arr3 = [1, 2, 3];
let total = 0;
for (let i = 0; i < arr3.length; i++){
    total += arr3[i];
}
console.log(total);

// -----

console.log("task 4");

const arr4 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr4.length; i++) {
    console.log(arr4[i]);
}
// -----

console.log("task 5");

const arr5 = ['one one', 'two', 'three3', 'four', 'five five!!'];
for (let i = 0; i < arr5.length; i++){
    if (arr5[i].length < 5) {
        continue;
    }
    console.log(arr5[i]);
}

// -----

console.log("task 6");

const arr6 = [12, 7, 19, 23, 56, 67, 902, 52, 100, 14];
let max = arr6[0];
for (let i = 1; i < arr6.length; i++){
    if (arr6[i] > max) {
        max = arr6[i];
    }
}
console.log(max);

// -----

console.log("task 7");

const arr7 = [12, 7, 19, 23, 56, 67, 14, 52, 100, 901];
for (let i = 0; i < arr7.length; i++) {
    if (arr7[i] % 2 === 0) {
        console.log(arr7[i]);
    }
}