import Projet from "./Projet.js";
import projetsData from "../data/projets.json";

const projetsGrid = document.querySelector(".projets-grid");

function fetchProjets(data) {
  return data.map(
    (projet) =>
      new Projet(
        projet.id,
        projet.name,
        projet.img,
        projet.imgAlt,
        projet.stack,
        projet.description,
        projet.categories,
        projet.date,
        projet.liens
      )
  );
}

export const projets = fetchProjets(projetsData);

projets.forEach((projet, index) => {
  const projectHtml = projet.toGridHtml(index);
  projetsGrid.appendChild(projectHtml);
});
