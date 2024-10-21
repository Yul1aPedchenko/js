//1
console.log("Task 1");

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
for (const key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}

// ----------

//2
console.log("Task 2");

const countProps = (obj) => {
  let count = 0;
  for (const key in obj) {
    count += 1;
  }
  return count;
};
console.log(countProps({})); // 0
console.log(countProps({ name: "Mango", age: 2 })); // 2
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// ----------

//3
console.log("Task 3");

const workers = {
  Nika: 15,
  Bob: 4,
  Nick: 7,
  Jon: 13,
  Sara: 10,
};
const findBestEmployee = (employees) => {
  let bestEmployee = "";
  let maxTasks = 0;
  for (const employee in employees) {
    if (employees[employee] > maxTasks) {
      maxTasks = employees[employee];
      bestEmployee = employee;
    }
  }
  return bestEmployee;
};
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence
console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango
console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux

// ----------

//4
console.log("Task 4");

const countTotalSalary = (employees) => {
  let totalSlary = 0;
  for (key in employees) {
    totalSlary += employees[key];
  }
  return totalSlary + "грн";
};
console.log(countTotalSalary({})); // 0
console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330
console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400

// ----------

//5
console.log("Task 5");

const productsOne = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроїд", price: 400, quantity: 7 },
  { name: "Захоплення", price: 1200, quantity: 2 },
];
const getAllPropValues = (arr, prop) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (prop in arr[i]) {
      result.push(arr[i][prop]);
    }
  }
  return result;
};
console.log(getAllPropValues(productsOne, "name")); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']
console.log(getAllPropValues(productsOne, "quantity")); // [4, 3, 7, 2]
console.log(getAllPropValues(productsOne, "category")); // []

// ----------

//6
console.log("Task 6");

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроїд", price: 400, quantity: 7 },
  { name: "Захоплення", price: 1200, quantity: 2 },
];

const calculateTotalPrice = (allProducts, productName) => {
  let totalPrice = 0;
  let quantity = 0;
  for (let i = 0; i < allProducts.length; i += 1) {
    if (allProducts[i].name === productName) {
      totalPrice += allProducts[i].price * allProducts[i].quantity;
    }
  }
  return totalPrice;
};
console.log(calculateTotalPrice(products, "Радар")); // 5200
console.log(calculateTotalPrice(products, "Дроїд")); // 2800
