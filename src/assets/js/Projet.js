import iconHtml from "/img/html-1.svg";
import iconCSS from "/img/css-3.svg";
import iconJS from "/img/javascript-1.svg";
import iconFigma from "/img/figma-icon.svg";
import iconAE from "/img/after-effects-1.svg";
import iconAngular from "/img/angular-icon-1.svg";
import iconReact from "/img/React-icon.svg";
import iconAI from "/img/adobe-illustrator-cc-3.svg";
import iconTailwind from "/img/tailwind.svg";
import iconAnimate from "/img/animate.png";
import iconShopify from "/img/shopify.svg";
import iconTypescript from "/img/typescript.png";
import iconReveal from "/img/reveal.svg";

function applyTheme(element, selectedTheme) {
  element.classList.remove("theme-classic", "theme-color", "theme-dark");

  if (selectedTheme === "classic") {
    element.classList.add("theme-classic");
  } else if (selectedTheme === "color") {
    element.classList.add("theme-color");
  } else if (selectedTheme === "dark") {
    element.classList.add("theme-dark");
  }
}

const themeRadios = document.querySelectorAll('input[name="btn-switch-theme"]');
themeRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    const selectedTheme = radio.value;

    const elementsToTheme = document.querySelectorAll(
      ".theme-classic, .theme-color, .theme-dark"
    );
    elementsToTheme.forEach((element) => {
      applyTheme(element, selectedTheme);
    });
  });
});

export default class Projet {
  constructor(id, title, img, imgAlt, stack, desc, categorie, date, links) {
    this.id = id;
    this.title = title;
    this.img = img;
    this.imgAlt = imgAlt;
    this.stack = stack;
    this.desc = desc;
    this.categorie = categorie;
    this.date = date;
    this.links = links;
  }

  toGridHtml(index) {
    const dialogContentHtml = document.querySelector(
      "#dialog-projets .dialog-content"
    );
    const cardHtml = document.createElement("div");
    const cardInfoHtml = document.createElement("div");
    const imgHtml = document.createElement("img");
    const infoProjet = document.createElement("div");
    const titleHtml = document.createElement("h3");
    const dateHtml = document.createElement("p");
    const iconeFleche = document.createElement("i");
    const btnMore = document.createElement("button");

    cardHtml.setAttribute("data-filter", this.categorie.join(" "));
    imgHtml.setAttribute("src", this.img);
    imgHtml.setAttribute("alt", this.imgAlt);
    btnMore.setAttribute("data-dialog", "#dialog-projets");

    cardHtml.className = "div-projet theme-classic";
    cardInfoHtml.className = "div-info theme-classic";
    imgHtml.className = "img-projet theme-classic";

    infoProjet.className = "info-projet theme-classic";
    titleHtml.className = "card-title theme-classic";
    dateHtml.className = "card-date theme-classic";
    btnMore.className = "btn-secondary btn-info theme-classic";
    iconeFleche.className = "fa-solid fa-arrow-right";

    titleHtml.textContent = this.title;
    dateHtml.textContent = this.date;
    btnMore.textContent = "En savoir plus ";

    btnMore.addEventListener("click", () => {
      dialogContentHtml.innerHTML = "";
      dialogContentHtml.setAttribute("data-index", index);
      dialogContentHtml.appendChild(this.toDetailHtml());
    });

    cardHtml.appendChild(cardInfoHtml);
    cardHtml.appendChild(imgHtml);
    cardInfoHtml.appendChild(infoProjet);
    infoProjet.appendChild(titleHtml);
    infoProjet.appendChild(dateHtml);
    cardInfoHtml.appendChild(btnMore);
    btnMore.appendChild(iconeFleche);

    return cardHtml;
  }

  toDetailHtml() {
    const detailHtml = document.createElement("div");
    const detailContentHtml = document.createElement("div");
    const topDialogHtml = document.createElement("div");
    const titleStackHtml = document.createElement("div");
    const imgHtml = document.createElement("img");
    const titleHtml = document.createElement("h3");
    const descHtml = document.createElement("p");
    const detailTextHtml = document.createElement("ul");
    const linksContainer = document.createElement("div");

    this.stack.forEach((tech) => {
      const li = document.createElement("li");

      const icon = document.createElement("img");
      icon.className = "tech-icon theme-classic";
      icon.src = this.getIcon(tech);
      icon.setAttribute("alt", this.getIcon(tech));

      li.appendChild(icon);
      li.appendChild(document.createTextNode(tech));

      detailTextHtml.appendChild(li);
    });

    imgHtml.setAttribute("src", this.img);
    imgHtml.setAttribute("alt", this.imgAlt);

    topDialogHtml.className = "top-dialog theme-classic";
    titleStackHtml.className = "title-stack theme-classic";
    detailHtml.classList.add("card-detail");
    detailContentHtml.classList.add("project-details-container");
    detailTextHtml.classList.add("list-details");
    linksContainer.classList.add("links-container");
    imgHtml.className = "img-modale-projet theme-classic";

    const selectedTheme = document.querySelector(
      'input[name="btn-switch-theme"]:checked'
    ).value;
    applyTheme(imgHtml, selectedTheme);
    applyTheme(detailHtml, selectedTheme);
    applyTheme(detailContentHtml, selectedTheme);
    applyTheme(titleStackHtml, selectedTheme);
    applyTheme(topDialogHtml, selectedTheme);

    Object.entries(this.links).forEach(([platform, url]) => {
      if (url) {
        const linkHtml = document.createElement("a");
        linkHtml.setAttribute("href", url);
        linkHtml.setAttribute("target", "_blank");
        linkHtml.className = "link-visitez theme-classic";

        if (platform.toLowerCase() === "télécharger") {
          linkHtml.setAttribute("download", url);
          linkHtml.textContent = `Télécharger le fichier`;
        } else {
          linkHtml.textContent = `Voir sur ${
            platform.charAt(0).toUpperCase() + platform.slice(1)
          }`;
        }

        linksContainer.appendChild(linkHtml);
      }
    });

    titleHtml.textContent = this.title;
    descHtml.textContent = this.desc;

    detailHtml.appendChild(detailContentHtml);
    topDialogHtml.appendChild(imgHtml);
    titleStackHtml.appendChild(titleHtml);
    titleStackHtml.appendChild(detailTextHtml);
    topDialogHtml.appendChild(titleStackHtml);
    detailContentHtml.appendChild(topDialogHtml);
    detailContentHtml.appendChild(descHtml);
    detailContentHtml.appendChild(linksContainer);

    return detailHtml;
  }

  getIcon(tech) {
    switch (tech.toLowerCase()) {
      case "figma":
        return iconFigma;
      case "html":
        return iconHtml;
      case "css":
        return iconCSS;
      case "javascript":
        return iconJS;
      case "tailwind":
        return iconTailwind;
      case "angular":
        return iconAngular;
      case "react":
        return iconReact;
      case "adobe illustrator":
        return iconAI;
      case "adobe after effects":
        return iconAE;
      case "adobe animate":
        return iconAnimate;
      case "typescript":
        return iconTypescript;
      case "revealjs":
        return iconReveal;
      case "shopify":
        return iconShopify;
    }
  }
}
