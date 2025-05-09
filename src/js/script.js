const downIcon = document.getElementById("open_resumes");
const resumeImage = document.getElementById("resume_image");

downIcon.addEventListener("click", () => {
  resumeImage.classList.remove("hidden");
  resumeImage.classList.add("grid");
  downIcon.classList.add("hidden");
});

// Accordion section

const toggle1 = document.getElementById("toggle1");
const toggle2 = document.getElementById("toggle2");
const toggle3 = document.getElementById("toggle3");
const toggle4 = document.getElementById("toggle4");
const toggle5 = document.getElementById("toggle5");

toggle1.addEventListener("click", () => {
  const item1 = document.getElementById("item1");
  item1.classList.toggle("hidden");
});

toggle2.addEventListener("click", () => {
  const item2 = document.getElementById("item2");
  item2.classList.toggle("hidden");
});

toggle3.addEventListener("click", () => {
  const item3 = document.getElementById("item3");
  item3.classList.toggle("hidden");
});

toggle4.addEventListener("click", () => {
  const item4 = document.getElementById("item4");
  item4.classList.toggle("hidden");
});

toggle5.addEventListener("click", () => {
  const item5 = document.getElementById("item5");
  item5.classList.toggle("hidden");
});

document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.getElementById("slow_load");

  const originalText = textElement.innerHTML;
  textElement.innerHTML = "";

  let i = 0;
  const speed = 25;

  function animateText() {
    if (i < originalText.length) {
      textElement.innerHTML =
        originalText.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      const delay = originalText.charAt(i) === "\n" ? speed * 3 : speed;
      setTimeout(animateText, delay);
      i++;
    } else {
      textElement.innerHTML = originalText;
    }
  }

  setTimeout(animateText, 200);
});
