"use strick";
console.log("TASK 1");

const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let string = "";

for (let i = 0; i < friends.length; i++) {
  string += friends[i];
  if (i < friends.length - 1) {
    string += ",";
  }
}
console.log(string);

string = friends.join(",");
console.log(string);

console.log("TASK 2(Метод splice)");
const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];
const cardToRemove = cards.splice(cards.indexOf("Карточка-3"), 1);
console.log(cards);
const cardToInsert = cards.splice(cards.length, 0, "Карточка-6");
console.log(cards);
const cardToUpdate = cards.splice(cards.indexOf("Карточка-4"), 1, "Карточка-4 :))"); 
console.log(cards);
