const themeButtonDark = document.querySelector(".theme-button-dark");
const themeButtonLighht = document.querySelector(".theme-button-light");
const fontButtonSansSerif = document.querySelector(".font-button-sans-serif");
const fontButtonSerif = document.querySelector(".font-button-serif");
const page = document.querySelector(".page");
const blogs = document.querySelectorAll(".blog-article");
const cards = document.querySelector(".cards");
const cardGridViewButton = document.querySelector(".card-view-button-grid");
const cardListViewButton = document.querySelector(".card-view-button-list");
const activePhoto = document.querySelector(".active-photo");
const previews = document.querySelectorAll(".preview-list a");

themeButtonDark.addEventListener("click", () => {
  themeButtonDark.classList.add("active");
  themeButtonLighht.classList.remove("active");
  page.classList.add("dark");
});

themeButtonLighht.addEventListener("click", () => {
  themeButtonLighht.classList.add("active");
  themeButtonDark.classList.remove("active");
  page.classList.remove("dark");
});

fontButtonSansSerif.addEventListener("click", () => {
  fontButtonSansSerif.classList.add("active");
  fontButtonSerif.classList.remove("active");
  page.classList.remove("serif");
});

fontButtonSerif.addEventListener("click", () => {
  fontButtonSerif.classList.add("active");
  fontButtonSansSerif.classList.remove("active");
  page.classList.add("serif");
});

blogs.forEach((blog) => {
  const moreButton = blog.querySelector(".more");
  moreButton.addEventListener("click", () => blog.classList.remove("short"));
});

cardGridViewButton.addEventListener("click", () => {
  cardGridViewButton.classList.add("active");
  cardListViewButton.classList.remove("active");
  cards.classList.remove("list");
});

cardListViewButton.addEventListener("click", () => {
  cardListViewButton.classList.add("active");
  cardGridViewButton.classList.remove("active");
  cards.classList.add("list");
});

previews.forEach((preview) => {
  preview.addEventListener("click", (evt) => {
    evt.preventDefault();
    activePhoto.src = preview.href;
    let currentActive = document.querySelector(".preview-list .active-item");
    currentActive.classList.remove("active-item");
    evt.target.classList.add("active-item");
  });
});
