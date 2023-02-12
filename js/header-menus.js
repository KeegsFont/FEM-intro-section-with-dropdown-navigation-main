const dropdownLabel = document.querySelectorAll(".dropdown-label");

dropdownLabel.forEach((label) => {
  label.addEventListener("click", () => {
    label.classList.toggle("active");
  });
});

const ham = document.querySelector(".primary-header__ham");

ham.addEventListener("click", () => {
  document.querySelector(".primary-header").classList.toggle("active");
});
