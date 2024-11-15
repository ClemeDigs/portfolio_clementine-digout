export default class AnimationManager {
  constructor() {
    this.btnToggleAnimation = document.querySelector(".animation");
    this.animateCssElements = document.querySelectorAll(".animate__animated");
    this.portfolioTitle = document.querySelector(".portfolio__title");
    this.portfolioYear = document.querySelector(".year");
    this.projectImages = document.querySelectorAll(".img-projet");
    this.animationOn = localStorage.getItem("animation") ?? true;

    this.btnToggleAnimation.addEventListener("change", () => {
      this.toggleAnimations();
    });
    this.setAnimations();
  }

  toggleAnimations() {
    this.animationOn = !this.animationOn;
    localStorage.setItem("animation", JSON.stringify(this.animationOn));

    this.setAnimations();
  }

  setAnimations() {
    if (this.animationOn === true) {
      this.animateCssElements.forEach((element) => {
        element.classList.add("animate__animated");
      });
      this.portfolioTitle.classList.add("ml6");
      this.portfolioYear.classList.add("ml5");
      this.projectImages.forEach((image) => {
        image.classList.remove("animate-off-hover");
      });
    } else {
      this.animateCssElements.forEach((element) => {
        element.classList.remove("animate__animated");
        this.portfolioTitle.classList.remove("ml6");
        this.portfolioYear.classList.remove("ml5");
        this.projectImages.forEach((image) => {
          image.classList.add("animate-off-hover");
        });
      });
    }

    console.log(this.projectImages);
    console.log(this.animationOn);
    console.log("LocalStorage:" + localStorage.getItem("animation"));
  }
}
