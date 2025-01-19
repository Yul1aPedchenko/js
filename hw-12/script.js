const values = document.querySelector(".value");

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.timerId = null;

    this.start();
  }

  start() {
    this.timerId = setInterval(() => {
      const currentTime = new Date().getTime();
      const time = this.targetDate - currentTime;

      if (time <= 0) {
        clearInterval(this.timerId);
        this.updateDisplay(0, 0, 0, 0);
        return;
      }

      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((time % (1000 * 60)) / 1000);

      this.updateDisplay(days, hours,mins,secs);
    }, 1000);
  }
  updateDisplay(days, hours, mins, secs) {
    const timer = document.querySelector(this.selector);
    timer.querySelector('[data-value="days"]').textContent = String(days).padStart(2, '0');
    timer.querySelector('[data-value="hours"]').textContent = String(hours).padStart(2, '0');
    timer.querySelector('[data-value="mins"]').textContent = String(mins).padStart(2, '0');
    timer.querySelector('[data-value="secs"]').textContent = String(secs).padStart(2, '0');
  }
}
const countDown = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jan 24, 2025, 20:30"),
});
