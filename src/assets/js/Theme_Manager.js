import imgFemmeColor from "/img/femme-color.png";
import imgFemmeColor2 from "/img/femme-color-2.png";
import imgFemmeDark from "/img/femme-dark-01.png";
import imgFemmeDark2 from "/img/femme-dark-02.png";
import imgFemmeClassic from "/img/cleme_line-art.png";
import imgFemmeClassic2 from "/img/cleme_line-art2.png";

import HoverManager from "./Hover_Manager.js";

export default class ThemeManager {
  constructor(elementsToTheme, header, footerDark, imgBanner, imgBanner2) {
    this.elementsToTheme = elementsToTheme;
    this.header = header;
    this.footerDark = footerDark;
    this.imgBanner = imgBanner;
    this.imgBanner2 = imgBanner2;
    this.body = document.querySelector("body");

    this.updateImages(imgFemmeClassic, imgFemmeClassic2);
    this.hoverManager = new HoverManager(this.imgBanner, this.imgBanner2);
  }

  changeTheme(oldThemes, newTheme) {
    this.elementsToTheme.forEach((element) => {
      oldThemes.split(" ").forEach((oldTheme) => {
        element.classList.remove(oldTheme);
      });
      element.classList.add(newTheme);
    });
  }

  fadeOutBodyAndChangeTheme(selectedTheme) {
    this.body.classList.remove("animate__fadeIn");
    this.body.classList.add("animate__zoomOut");
    this.header.classList.add("animate__fadeOutUpBig");

    this.body.addEventListener(
      "animationend",
      () => {
        this.body.classList.remove("animate__zoomOut");
        this.header.classList.remove("animate__fadeOutUpBig");
        this.body.classList.add("animate__fadeIn");

        if (selectedTheme === "color") {
          this.changeTheme("theme-dark theme-classic", "theme-color");
          this.updateImages(imgFemmeColor, imgFemmeColor2);
          this.footerDark.classList.add("hidden");
        } else if (selectedTheme === "dark") {
          this.changeTheme("theme-color theme-classic", "theme-dark");
          this.updateImages(imgFemmeDark, imgFemmeDark2);
          this.footerDark.classList.remove("hidden");
        } else {
          this.changeTheme("theme-color theme-dark", "theme-classic");
          this.updateImages(imgFemmeClassic, imgFemmeClassic2);
          this.footerDark.classList.add("hidden");
        }
      },
      { once: true }
    );
  }

  updateImages(img1, img2) {
    this.imgBanner.setAttribute("src", img1);
    this.imgBanner2.setAttribute("src", img2);
  }
}
