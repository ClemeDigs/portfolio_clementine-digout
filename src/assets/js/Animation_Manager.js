export default class AnimationManager {
  constructor() {
    this.btnToggleAnimation = document.querySelectorAll(".input__animation");
    this.animateCssElements = document.querySelectorAll(".animate__animated");
    this.portfolioTitle = document.querySelector(".portfolio__title");
    this.portfolioYear = document.querySelector(".year");
    this.projectImages = document.querySelectorAll(".img-projet");

    this.animationOff =
      JSON.parse(localStorage.getItem("animationOff")) ?? false;

    this.setAnimations();

    this.btnToggleAnimation.forEach((btn) => {
      btn.addEventListener("change", () => {
        this.toggleAnimations();
      });
    });
  }

  toggleAnimations() {
    this.animationOff = !this.animationOff;
    localStorage.setItem("animationOff", JSON.stringify(this.animationOff));
    this.setAnimations();
  }

  setAnimations() {
    this.btnToggleAnimation.forEach((btn) => {
      btn.checked = !this.animationOff;
    });

    if (!this.animationOff) {
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
      });
      this.portfolioTitle.classList.remove("ml6");
      this.portfolioYear.classList.remove("ml5");
      this.projectImages.forEach((image) => {
        image.classList.add("animate-off-hover");
      });
    }
  }
}
