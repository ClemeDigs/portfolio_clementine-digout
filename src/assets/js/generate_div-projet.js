import { projets } from "./projets.js";

const projetsGrid = document.querySelector(".projets-grid");

projets.forEach((projet, index) => {
  projetsGrid.appendChild(projet.toGridHtml(index));
});
