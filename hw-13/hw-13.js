//1
console.log("Task 1");

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};
const { name, age, hobby, premium, mood } = user;
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
for (const key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}
// ----------

//2
console.log("Task 2");

const countProps = ({ ...obj }) => {
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
const findBestEmployee = ({ ...employees }) => {
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

const countTotalSalary = ({ ...employees }) => {
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
const [first, second, third, fourth] = products;
const { name: nameFirst, price: priceFirst, quantity: quantityFirst } = first;
const { name: nameSecond, price: priceSecond, quantity: quantitySecond } = second;
const { name: nameThird, price: priceThird, quantity: quantityThird } = third;
const { name: nameFourth, price: priceFourth, quantity: quantityFourth } = fourth;

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
const [one, two, three, four] = products;
const { name: name1, price: price1, quantity: quantity1 } = one;
const { name: name2, price: price2, quantity: quantity2 } = two;
const { name: name3, price: price3, quantity: quantity3 } = three;
const { name: name4, price: price4, quantity: quantity4 } = four;

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

// ----------

//7
console.log("Task 7");
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    return {
      id: this.transactions.length + 1,
      type,
      amount,
    };
  },

  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
    this.balance += amount;
  },
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Зняття такої суми неможлтве");
      return;
    }
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
    this.balance -= amount;
  },
  getBalance() {
    return this.balance;
  },
  getTransactionDetails(id) {
    return this.transactions.find((transaction) => transaction.id === id);
  },
  getTransactionTotal(type) {
    return this.transactions
      .filter((transaction) => transaction.type === type)
      .reduce((total, transaction) => total + transaction.amount, 0);
  },
};
account.deposit(100);
account.withdraw(50);
account.deposit(200);
console.log(account.getBalance());
console.log(account.getTransactionDetails(2));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));

