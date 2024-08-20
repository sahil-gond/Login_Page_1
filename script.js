const sigh_in_btn = document.getElementById('sign-in-btn');
const sigh_up_btn = document.getElementById('sign-up-btn');
const container = document.querySelector(".container")

sigh_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sigh_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});