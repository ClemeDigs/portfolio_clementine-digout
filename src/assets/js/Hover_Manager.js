export default class HoverManager {
  constructor(imgBanner, imgBanner2) {
    this.imgBanner = imgBanner;
    this.imgBanner2 = imgBanner2;

    this.setInitialStyles();

    this.initializeHoverEvents();
  }

  setInitialStyles() {
    this.imgBanner.style.opacity = 1;
    this.imgBanner.style.zIndex = 1;
    this.imgBanner2.style.opacity = 0;
    this.imgBanner2.style.zIndex = 0;
  }

  initializeHoverEvents() {
    this.imgBanner.addEventListener("mouseenter", () => {
      this.imgBanner.style.opacity = 0;
      this.imgBanner.style.zIndex = 0;
      this.imgBanner2.style.opacity = 1;
      this.imgBanner2.style.zIndex = 1;
    });

    this.imgBanner2.addEventListener("mouseleave", () => {
      this.imgBanner.style.opacity = 1;
      this.imgBanner.style.zIndex = 1;
      this.imgBanner2.style.opacity = 0;
      this.imgBanner2.style.zIndex = 0;
    });
  }
}
