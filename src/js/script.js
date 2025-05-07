const downIcon = document.getElementById("open_resumes");
const resumeImage = document.getElementById("resume_image");
const toggle1 = document.getElementById("toggle1");
const toggle2 = document.getElementById("toggle2");
const toggle3 = document.getElementById("toggle3");
const toggle4 = document.getElementById("toggle4");
const toggle5 = document.getElementById("toggle5");

downIcon.addEventListener("click", () => {
  resumeImage.classList.remove("hidden");
  resumeImage.classList.add("grid");
  downIcon.classList.add("hidden");
});

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
