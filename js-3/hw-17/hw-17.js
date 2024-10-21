// 1
const fieldValueOne = document.querySelector("#textOne");
const buttonOne = document.querySelector("#changeBtnOne");
buttonOne.onclick = () => {
  buttonOne.textContent = fieldValueOne.value;
};

// 2
const imgTwo = document.querySelector("#imgTwo");
imgTwo.src =
  "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg";
imgTwo.style.width = '400px';

// 3
const imgThree = document.querySelector("#imgThree");
imgThree.alt =
  "cat2";
imgThree.style.width = "400px";
console.log(imgThree);

// 4
const list = document.querySelector('#listFour');
const firstItem = list.firstElementChild;
firstItem.textContent = 'newTextContent'