import ThemeManager from "./Theme_Manager";

const elementsToTheme = document.querySelectorAll("body, body *");
const header = document.querySelector("header");
const footerDark = document.querySelector(".footer-theme-dark");
const imgBanner = document.querySelector(".img__banner");
const imgBanner2 = document.querySelector(".img__banner-2");
const themeRadios = document.querySelectorAll('input[name="btn-switch-theme"]');

const themeManager = new ThemeManager(
  elementsToTheme,
  header,
  footerDark,
  imgBanner,
  imgBanner2
);

themeRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    const selectedTheme = radio.value;
    themeManager.fadeOutBodyAndChangeTheme(selectedTheme);
  });
});
