//1
const galleryImages = document.querySelectorAll(".image");
let currentIndex = 0;

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    currentIndex = (currentIndex + 1) % galleryImages.length;
  } else if (event.key === "ArrowLeft") {
    currentIndex =
      (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  }
});

//2
const createBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxes = document.getElementById("boxes");

const createBoxes = (amount) => {
  const baseSize = 30;
  const sizeIncrement = 10;
  for (let i = 0; i < amount; i++) {
    let item = document.createElement("div");
    const size = baseSize + i * sizeIncrement;
    item.style.width = `${size}px`;
      item.style.height = `${size}px`;
      item.style.margin = `5px`;
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
    item.style.backgroundColor = randomColor;
    boxes.append(item);
  }
};
const destroyBoxes = () => {
  boxes.innerHTML = "";
};

createBtn.addEventListener("click", () => {
  const amount = document.querySelector('[type="number"]').value;
  createBoxes(amount);
});
destroyBtn.addEventListener("click", destroyBoxes);
