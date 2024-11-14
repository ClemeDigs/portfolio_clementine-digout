export default class Slider {
  constructor() {
    this.themeStylesheet = document.getElementById("theme-stylesheet");
    this.btnPrevious = document.querySelector(".slider__btn--previous");
    this.btnNext = document.querySelector(".slider__btn--next");
    this.slidesContainer = document.querySelector(".projets-grid");
    this.body = document.body;
    this.progressBar = document.querySelector(".progress__bar");
    this.currentSlideIndex = 0;
    this.intervalValue;

    this.updateSlides();
    this.hideBtns();
    this.changeSlide();

    this.btnPrevious.addEventListener("click", () => {
      this.previousSlide();
      this.hideBtns();
    });

    this.btnNext.addEventListener("click", () => {
      this.nextSlide();
      this.hideBtns();
    });
  }

  updateSlides() {
    this.slides = Array.from(
      this.slidesContainer.querySelectorAll(".div-projet")
    ).filter((slide) => slide.style.display !== "none");

    this.updateProgress();
    this.updateSlidePosition();
  }

  updateProgress() {
    let progressValue =
      ((this.currentSlideIndex + 1) / this.slides.length) * 100;
    this.progressBar.style.width = progressValue + "%";
  }

  updateSlidePosition() {
    const slideWidth = this.slides[0].offsetWidth;
    this.slidesContainer.scrollLeft = slideWidth * this.currentSlideIndex;
  }

  nextSlide() {
    this.currentSlideIndex = Math.min(
      this.slides.length - 1,
      this.currentSlideIndex + 1
    );
    this.updateProgress();
    this.updateSlidePosition();
  }

  previousSlide() {
    this.currentSlideIndex = Math.max(0, this.currentSlideIndex - 1);
    this.updateProgress();
    this.updateSlidePosition();
  }

  hideBtns() {
    if (this.currentSlideIndex === 0) {
      this.btnPrevious.classList.add("slider__btn--previous--hidden");
    } else {
      this.btnPrevious.classList.remove("slider__btn--previous--hidden");
    }

    if (this.currentSlideIndex === this.slides.length - 1) {
      this.btnNext.classList.add("slider__btn--next--hidden");
    } else {
      this.btnNext.classList.remove("slider__btn--next--hidden");
    }
  }

  changeSlide() {
    this.intervalValue = setInterval(() => {
      if (this.currentSlideIndex === this.slides.length - 1) {
        this.currentSlideIndex = 0;
      } else {
        this.currentSlideIndex++;
      }
      this.updateSlidePosition();
      this.updateProgress();
      this.hideBtns();
    }, 3000);
  }
}
