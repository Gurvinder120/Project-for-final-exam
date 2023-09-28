const searchBar = document.querySelector("#search-products");
const listBtn = document.querySelector("#listBtn");
const menu = document.querySelector(".menu");
const categories = document.querySelectorAll(".category");
// const currency = document.querySelector("#currency");
const user_email = document.querySelector("#user-email");

searchBar.addEventListener("click", function () {
  searchBar.style.outline = "none";
});

listBtn.addEventListener("click", function () {
  menu.classList.toggle("menu-open");
});

categories.forEach((category) => {
  category.addEventListener("click", () => {
    categories.forEach((c) => c.classList.remove("active"));
    category.classList.add("active");
  });
});

user_email.addEventListener("click", function () {
  user_email.style.outline = "none";
});
