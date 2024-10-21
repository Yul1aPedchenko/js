console.log("TASK 1");
const logItems = function (array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
};
logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

console.log("TASK 2");
const calculateEngravingPrice = function (message, pricePerWord) {
  const words = message.split(" ");
  return words.length * pricePerWord;
};
// console.log(calculateEngravingPrice("I want bcwc jhwch ciww dcewc", 20));
console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
);
console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
);
console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
);
console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
);

console.log("TASK 3");
const findLongestWord = function (string) {
  words = string.split(" ");
  longest = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
};
// console.log(findLongestWord("Im love js"));
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'
console.log(findLongestWord("Google do a roll")); // 'Google'
console.log(findLongestWord("May the force be with you")); // 'force'

console.log("TASK 4");
const formatString = function (string) {
  if (string.length <= 40) {
    return string;
  } else {
    return string.slice(0, 40) + "...";
  }
};
console.log(
  formatString("Lorem Ipsum is simply dummy text of the printing and")
);

console.log("TASK 5");
const checkForSpam = function (message) {
  const lowerMessage = message.toLowerCase();
  if (lowerMessage.includes("spam") || lowerMessage.includes("sale")) {
    return true;
  }
  return false;
};
console.log(checkForSpam("Spam Text Messages and Phishing"));
console.log(
  checkForSpam(
    "Scammers often try to get you to click on links in text messages by promising you something. "
  )
);

console.log("TASK 6");
let input;
const numbers = [];
let total = 0;
do {
  input = prompt("введіть число");
  if (input !== null) {
    numbers.push(Number(input));
  }
} while (input !== null);

if (numbers.length > 0) {
  for (let number of numbers) {
    total += number;
  }
  console.log(`Загальна сума чисел дорівнює ${total}`);
}

console.log("TASK 7");
const isLoginValid = function (login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  }
  return false;
};
const isLoginUnique = function (allLogins, login) {
  if (allLogins.includes(login)) {
    return false;
  }
  return true;
};
const addLogin = function (allLogins, login) {
  if (!isLoginValid(login)) {
    return "Помилка! Логін повинен бути від 4 до 16 символів";
  }
  if (!isLoginUnique(allLogins, login)) {
    return "Такий логін уже використовується!";
  }
  allLogins.push(login);
  return "Логін успішно доданий!";
};

const logins = ["Mango", "Poly", "Ajax", "Kong"];
const newLogin = "Poly";
console.log(addLogin(logins, newLogin));

const arr1 = ["Mango", "Poly", "Ajax", "Kong"];
const arr1Plus = "Moly";
console.log(addLogin(arr1, arr1Plus));

const arr2 = ["Mango", "Poly", "Ajax", "Kong"];
const arr2Plus = "Mol";
console.log(addLogin(arr2, arr2Plus));