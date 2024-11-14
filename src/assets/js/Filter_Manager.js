import Slider from "./Slider";

export default class FilterManager {
  constructor(slider) {
    this.filterIcon = document.querySelector(".filter-icon");
    this.filtersDiv = document.querySelector(".filters");
    this.projets = document.querySelectorAll(".div-projet");
    this.filters = document.querySelectorAll(".checkbox-filter");
    this.slider = new Slider();

    // Initialisation des écouteurs d'événements
    this.initializeEventListeners();
  }

  // Affiche ou cache les projets en fonction des filtres sélectionnés
  applyFilters() {
    let activeFilters = [];

    this.filters.forEach((filter) => {
      if (filter.checked) {
        activeFilters.push(filter.getAttribute("data-filter"));
      }
    });

    this.projets.forEach((projet) => {
      const projetCategories = projet.getAttribute("data-filter").split(" ");
      if (activeFilters.length === 0) {
        projet.style.display = "";
      } else {
        const isMatch = activeFilters.some((filter) =>
          projetCategories.includes(filter)
        );
        projet.style.display = isMatch ? "" : "none";
      }
    });

    // Mise à jour du slider après l'application des filtres
    this.slider.updateSlides();
    this.slider.hideBtns();
  }

  // Affiche ou masque les options de filtre
  toggleFilters() {
    this.filtersDiv.classList.toggle("hidden");
  }

  // Initialisation des écouteurs d'événements
  initializeEventListeners() {
    this.filterIcon.addEventListener("click", () => this.toggleFilters());
    this.filters.forEach((filter) =>
      filter.addEventListener("change", () => this.applyFilters())
    );
  }
}
