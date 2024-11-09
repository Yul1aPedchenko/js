document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".images-list li");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const img = entry.target.querySelector("img");
      if (entry.isIntersecting) {
        img.src = img.getAttribute("data-high-res");
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      } else {
        img.src = img.src.replace("-high.webp", "-low.png");
        entry.target.classList.remove("visible");
      }
    });
  });
  images.forEach((image) => {
    observer.observe(image);
  });
});

const btnHigh = document.querySelector(".btn-high-quality");
const btnLow = document.querySelector(".btn-low-quality");
const text = document.querySelector("span");
let isBtn1Clicked = false;

const loadImages = (format) => {
  const secondImages = document.querySelectorAll(".second-images-list li");
  secondImages.forEach((image) => {
    const img = image.querySelector("img");
    if (format === "high") {
      img.src = img.getAttribute("data-high-res");
      image.classList.add("visible");
      text.textContent = "WEBP";
    } else if (format === "low" ) {
      img.src = img.src.replace("-high.webp", "-low.png");
      image.classList.remove("visible");
        text.textContent = "PNG";
        
        img.classList.add("animate-on-click");
    }
  });
};

btnHigh.addEventListener("click", () => {
  loadImages("high");
  isBtn1Clicked = true;
});

btnLow.addEventListener("click", () => {
  if (isBtn1Clicked) {
    loadImages("low");
    isBtn1Clicked = false;
  } else {
    alert(
      'Your images are not in WEBP yet. Please click on the "Load img in WEBP" button first.'
    );
  }
});
