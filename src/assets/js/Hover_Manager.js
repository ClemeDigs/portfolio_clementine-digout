export default class HoverManager {
  constructor(imgBanner, imgBanner2) {
    this.imgBanner = imgBanner;
    this.imgBanner2 = imgBanner2;

    // Définir les styles initiaux pour les images
    this.setInitialStyles();

    // Initialiser les événements de hover
    this.initializeHoverEvents();
  }

  // Méthode pour définir les styles initiaux des images
  setInitialStyles() {
    this.imgBanner.style.opacity = 1;
    this.imgBanner.style.zIndex = 1;
    this.imgBanner2.style.opacity = 0;
    this.imgBanner2.style.zIndex = 0;
  }

  // Méthode pour initialiser les événements de hover
  initializeHoverEvents() {
    // Au survol de imgBanner, afficher imgBanner2
    this.imgBanner.addEventListener("mouseenter", () => {
      this.imgBanner.style.opacity = 0;
      this.imgBanner.style.zIndex = 0;
      this.imgBanner2.style.opacity = 1;
      this.imgBanner2.style.zIndex = 1;
    });

    // Au départ de la souris de imgBanner2, revenir à imgBanner
    this.imgBanner2.addEventListener("mouseleave", () => {
      this.imgBanner.style.opacity = 1;
      this.imgBanner.style.zIndex = 1;
      this.imgBanner2.style.opacity = 0;
      this.imgBanner2.style.zIndex = 0;
    });
  }
}
