//1
const sliderInput = document.querySelector(".slider__input");
const sliderImage = document.querySelector(".slider__image");
const slider = document.querySelector(".slider");

const outputH = document.querySelector(".outputH");
const outputW = document.querySelector(".outputW");

function resizeImage() {
  const sliderSize = slider.offsetWidth;
  const size = sliderInput.value;
  sliderImage.style.width = `${(sliderSize * size) / 100}px`;
  sliderImage.style.height = `${(sliderSize * size) / 100}px`;
}
sliderInput.addEventListener(
  "input",
  _.debounce(() => {
    resizeImage();
  }, 100),
);

//2
const box = document.getElementById("box");
const container = document.querySelector(".hw-2");

const moveBox = (event) => {
  const containerRect = container.getBoundingClientRect();
  const boxRect = box.getBoundingClientRect();

  let newLeft = event.clientX - containerRect.left - boxRect.width / 2;
  let newTop = event.clientY - containerRect.top - boxRect.height / 2;

  if (newLeft < 0) newLeft = 0;
  if (newTop < 0) newTop = 0;
  if (newLeft + boxRect.width > containerRect.width)
    newLeft = containerRect.width - boxRect.width;
  if (newTop + boxRect.height > containerRect.height)
    newTop = containerRect.height - boxRect.height;

  box.style.left = `${newLeft}px`;
  box.style.top = `${newTop}px`;
};

container.addEventListener("mousemove", _.debounce((event) => {
  moveBox(event);
}, 100));