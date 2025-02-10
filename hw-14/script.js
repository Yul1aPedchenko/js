//1
function createPromise(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

const promises = [
    createPromise('first', 1000),
    createPromise('second', 500),
    createPromise('third', 2000),
    createPromise('forth', 1500),
    createPromise('fifth', 3000)
]

Promise.all(promises).then((value) => {
    console.log(value);
})
.catch((error) => {
    console.log(error);
})

//2
function randomDelay(value){
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(value)
        }, getRandomTime(1000, 5000));
    });
}

function getRandomTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const secondPromises = [
    randomDelay('first2'),
    randomDelay('second2'),
    randomDelay('third2'),
    randomDelay('forth2'),
    randomDelay('fifth2')
]
Promise.race(secondPromises)
.then((value) => {
    console.log(value);
})
.catch((error) => {
    console.log(error);
})