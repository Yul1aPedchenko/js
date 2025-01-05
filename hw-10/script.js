//1
document.getElementById("startTimeout").addEventListener("click", () => {
  index = 0;
  const output = document.getElementById("firstOutput");
  const intervalId = setInterval(() => {
    index++;
    output.textContent= `It is message ${index}`;
    if (index > 5) {
      clearInterval(intervalId);
      output.textContent = `Інтервал зупинено`;
    }
  }, 1500);
});
//2
const animationArea = document.getElementById("animationArea");
const boxes = document.querySelectorAll(".animatedBox");

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function animatedBoxes() {
  boxes.forEach((box) => {
    const x = getRandom(0, animationArea.offsetWidth - 50);
    const y = getRandom(0, animationArea.offsetHeight - 50);

    const size = getRandom(30, 100);

    const color = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(
      0,
      255
    )})`;
    box.style.left = `${x}px`;
    box.style.top = `${y}px`;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = color;
  });
}
setInterval(animatedBoxes, 1000);

//3
function startGame() {
  const gameArea = document.getElementById("gameArea");
  const scoreDisplay = document.getElementById("score");
  let score = 0;
  const gameDuration = 10000;
  let gameInterval;

  function createTarget() {
    const target = document.createElement("div");
    target.className = "target";

    const maxX = gameArea.clientWidth - 50;
    const maxY = gameArea.clientHeight - 50;
    target.style.left = `${Math.random() * maxX}px`;
    target.style.top = `${Math.random() * maxY}px`;

    target.addEventListener("click", () => {
      score++;
      scoreDisplay.textContent = `Points: ${score}`;
      target.remove();
    });

    gameArea.appendChild(target);

    setTimeout(() => target.remove(), 2000);
  }
  gameInterval = setInterval(createTarget, 1000);

  setTimeout(() => {
    clearInterval(gameInterval);
    gameArea.innerHTML = ``;
    scoreDisplay.textContent = `Game is finished! Your score ${score}`;
  }, gameDuration);
}
startGame();
//4
document.addEventListener("DOMContentLoaded", () => {
  const timeInput = document.getElementById("time");
  const output = document.getElementById("output");
  let timerId;

  timeInput.addEventListener("input", () => {
    const time = parseInt(timeInput.value);

    clearTimeout(timerId);
    if (isNaN(time) || time <= 0) {
      output.textContent = "Write new date";
      return;
    }

    output.textContent = `timer was started. Waiting ${time}s..`;
    timerId = setTimeout(() => {
      output.textContent = `The time you specified has expired`;
    }, time * 1000);
  });
});
