//1
const openModalBtn = document.querySelector('[data-action="open-modal"]');
const closeModalBtn = document.querySelector('[data-action="close-modal"]');
const backdrop = document.querySelector(".js-backdrop");
const openModal = () => {
  document.body.classList.add("show-modal");
};
const closeModal = () => {
  document.body.classList.remove("show-modal");
};
openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

//2
const onBackdropClick = (event) => {
  if (event.target === backdrop) {
    closeModal();
  }
};
backdrop.addEventListener("click", onBackdropClick);

//3
const form = document.querySelector("form");
function changeBackgroundColor(event) {
  if (event.target.name === "color") {
    document.body.style.backgroundColor = event.target.value;
  }
}
form.addEventListener("change", changeBackgroundColor);

//4
const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");
nameInput.addEventListener("input", () => {
    nameOutput.textContent = nameInput.value !== '' ? nameInput.value : 'незнайомець'
});
