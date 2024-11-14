export default class ScrollHandler {
  constructor(btnSwitchTheme) {
    this.header = document.querySelector("body header");
    this.body = document.body;
    this.btnSwitchTheme = btnSwitchTheme;

    // Attache les événements
    this.initializeEventListeners();
  }

  // Méthode pour gérer l'événement de défilement
  handleScroll() {
    if (this.body.classList.contains("theme-color")) {
      if (document.documentElement.scrollTop > 100) {
        this.header.classList.add("minimized");
        // Si un bouton de flèche de retour en haut est ajouté plus tard, ce code peut être activé.
        // btnFlecheUp.classList.remove("hidden");
      } else {
        this.header.classList.remove("minimized");
        // btnFlecheUp.classList.add("hidden");
      }
    } else {
      this.header.classList.remove("minimized");
    }
  }

  // Initialise les écouteurs d'événements
  initializeEventListeners() {
    window.addEventListener("scroll", () => this.handleScroll());
    this.btnSwitchTheme.addEventListener("click", () => this.handleScroll());
  }
}
