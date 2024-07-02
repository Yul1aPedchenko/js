//1
console.log("Task 1");

const user = {
  hobby: "none",
  premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
for (const key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}

//2
console.log("Task 2");

const userOne = {
  hobby: "none",
  premium: true,
  mood: "happy",
};
const countProps = (obj) => {
  let count = 0;
  for (const key in obj) {
    count += 1;
  }
  return count;
};
console.log(countProps(userOne));

//3
console.log("Task 3");

const workers = {
  Nika: 15,
  Bob: 4,
  Nick: 7,
  Jon: 13,
  Sara: 10,
};
const findBestWorker = (workers) => {
  let bestWorker = "";
  let maxTasks = 0;
  for (const worker in workers) {
    if (workers[worker] > maxTasks) {
      maxTasks = workers[worker];
      bestWorker = worker;
    }
  }
  return bestWorker;
};
console.log(findBestWorker(workers));

//4
console.log("Task 4");

const employees = {
  Nika: 1500,
  Bob: 400,
  Nick: 700,
  Jon: 1300,
  Sara: 1000,
};
const countTotalSalary = (employees) => {
  let totalSlary = 0;
  for (key in employees) {
    totalSlary += employees[key];
  }
  return totalSlary + "грн";
};
console.log(countTotalSalary(employees));

//5
console.log("Task 5");

const arr = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Peter", age: 35 },
];
const getAllPropValues = (arr, prop) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i][prop]);
  }
  return result;
};
console.log(getAllPropValues(arr, "name"));

//6
console.log("Task 6");

const products = [
  { name: "Apple", price: 1.5, quantity: 2 },
  { name: "Banana", price: 0.5, quantity: 3 },
  { name: "Apple", price: 1.2, quantity: 1 },
  { name: "Orange", price: 0.8, quantity: 5 },
];
const calculateTotalPrice = (allProdcuts, productName) => {
  let totalPrice = 0;
    let quantity = 0;
    for (let i = 0; i < allProdcuts.length; i += 1) {
        if (allProdcuts[i].name === productName) {
            quantity += 1;
            totalPrice += allProdcuts[i].price;
        }
    }
    return totalPrice * quantity;
};
console.log(calculateTotalPrice(products, 'Apple'));