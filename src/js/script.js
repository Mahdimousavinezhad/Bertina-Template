const downIcon = document.getElementById("open_resumes");
const resumeImage = document.getElementById("resume_image");

downIcon.addEventListener("click", () => {
  resumeImage.classList.remove("hidden");
  resumeImage.classList.add("grid");
  downIcon.classList.add("hidden");
});
