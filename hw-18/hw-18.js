// 1
console.log("Task 1");
const categoriesList = document.getElementById("categories");
const categories = categoriesList.querySelectorAll(".item");
const answerOne = document.querySelector(".answer1");
const answerTwo = document.querySelector(".answer2");
const answerThree = document.querySelector(".answer3");

console.log(`У списку ${categories.length} категорії.`);
answerOne.textContent = `У списку ${categories.length} категорії.`;
categories.forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;
  const categoryItems = category.querySelectorAll("li");
  answerTwo.textContent = `Категорія: ${categoryTitle}`;
  answerThree.textContent = `Кількість елементів: ${categoryItems.length}`;
});

// 2
console.log("Task 2");
const ingredientsList = document.querySelector("#ingredients");

const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];
const markup = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  return li;
});
ingredientsList.append(...markup);

//3
console.log("Task 3");
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.getElementById("gallery");

const galleryItems = images
  .map((image) => `<li><img src="${image.url}" alt="${image.alt}"></li>`)
  .join("");
gallery.insertAdjacentHTML("beforeend", galleryItems);

//4
const counterValueElement = document.getElementById("value");  
let counterValue = 0;
function decrement() {
    counterValue--;
    counterValueElement.textContent = counterValue; 
}
function increment() {
  counterValue++;
  counterValueElement.textContent = counterValue;
}