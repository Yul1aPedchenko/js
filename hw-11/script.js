//1
let timer = 1000 * 60 * 60 + 1000 * 60 * 30;
const timerEl = document.querySelector(".timerOne");
const output = document.querySelector(".output");
const timerInterval = setInterval(() => {
  timer -= 1000 * 60;
  const minutesLeft = Math.floor(timer / (1000 * 60));
  timerEl.textContent = `${Math.floor(minutesLeft / 60)}:${minutesLeft % 60}`;

  if (timer <= 1000 * 60 * 30) {
    output.textContent = `Залишилось меньше 30 хвилин`;
    output.style.backgroundColor = "pink";
  }
  if (timer <= 0) {
    clearInterval(timerInterval);
    output.textContent = `Час вийшов!`;
    output.style.backgroundColor = "red";
  }
}, 60000);

//2
document.getElementById("start").addEventListener("click", () => {
  let timer = 30000;
  const timerEl = document.querySelector(".animatedDiv");
  document.getElementById("start").disabled = true;
  const timerId = setInterval(() => {
    timer -= 1000;
    timerEl.textContent = `${Math.floor(timer / 1000)}`;

    if (timer === 10000) {
      timerEl.classList.add("jump");
    }
    if (timer === 0) {
      timerEl.style.transform = "scale(1)";
      timerEl.style.backgroundColor = "blue";
      timerEl.classList.remove("jump");
      clearInterval(timerId);
      document.getElementById("start").disabled = false;
    }
  }, 1000);
});
