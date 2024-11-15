import Slider from "./Slider";

export default class FilterManager {
  constructor(slider) {
    this.filterIcon = document.querySelector(".filter-icon");
    this.filtersDiv = document.querySelector(".filters");
    this.projets = document.querySelectorAll(".div-projet");
    this.filters = document.querySelectorAll(".checkbox-filter");
    this.slider = new Slider();

    this.initializeEventListeners();
  }

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

    this.slider.updateSlides();
    this.slider.hideBtns();
  }

  toggleFilters() {
    this.filtersDiv.classList.toggle("hidden");
  }

  initializeEventListeners() {
    this.filterIcon.addEventListener("click", () => this.toggleFilters());
    this.filters.forEach((filter) =>
      filter.addEventListener("change", () => this.applyFilters())
    );
  }
}
