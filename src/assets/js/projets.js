import Projet from "./Projet";

import imgUnZeste from "/img/un-zeste.png";
import imgLaRuche from "/img/la-ruche.png";
import imgA2 from "/img/a2.png";
import imgPalette from "/img/palette.png";
import imgDesignChallenge from "/img/design-challenge.png";
import imgMotionDesign from "/img/motion-design.png";
import imgCafeSmith from "/img/cafe-smith.png";
import imgMcpcUx from "/img/mcpc-design.png";
import imgJeux from "/img/jeux.png";
import imgTrivia from "/img/trivia.png";
import imgPokemon from "/img/pokemon.png";
import imgBotaniste from "/img/botaniste.png";
import docRecommandations from "../docs/recommandations.pdf";
import docAngular from "../docs/angular-18_p1.pdf";

export const projets = [
  new Projet(
    1,
    "Trivia Game",
    imgTrivia,
    "Page d'accueil du jeu trivia",
    ["HTML", "Tailwind", "JavaScript"],
    "Projet dans le carde du cours d'application interactive. Fetch de données, utilisation du local storage, gestion des scores et du jeu en cours, changement d'interface en une seule page.",
    ["Programmation", "Design"],
    "Octobre 2024",
    {
      github: "https://github.com/ClemeDigs/trivia.git",
      vercel: "https://trivia-henna-mu.vercel.app/",
      figma:
        "https://www.figma.com/design/iroepunx3oV9IkoxxJdWbQ/TL1---TRIVIA?node-id=0-1&t=15AXn97QpQhtr6Du-1",
    }
  ),
  new Projet(
    2,
    "Maison de la Culture du Pic Champlain",
    imgMcpcUx,
    "Haut de la page notre organisme",
    ["Figma", "Adobe Illustrator"],
    "Projet pour un OBNL existant: La Maison de la Culture du Pic Champlain. Tâches effectuées: Recherche sur les utilisateurs et les compétiteurs, travail d'architecture, refonte du site web, maquettes basses et haute fidélité, prototype. Travail d'équipe.",
    ["Design"],
    "Juillet 2024",
    {
      figma:
        "https://www.figma.com/design/QfkPJ5HytDJHcPMwLEWSZH/MCPC_Projet-I_Design?node-id=1648-12850&t=f1Ag0t5pfL7PrKwz-1",
    }
  ),
  new Projet(
    3,
    "Le Botaniste (en cours)",
    imgBotaniste,
    "Page d'accueil du Botaniste",
    ["HTML", "Tailwind", "React", "Shopify"],
    "Projet en construction dans le cadre du cours d'application interactive. Implémentation d'un site avec Shopify et React. Adaptation des produits et du design selon le template de base.",
    ["Programmation"],
    "Novembre 2024",
    {
      github: "https://github.com/ClemeDigs/le_botaniste.git",
    }
  ),
  new Projet(
    4,
    "Recherche sur Angular (en cours)",
    imgPokemon,
    "Page d'accueil de Un Zeste de Clémentine",
    ["HTML", "CSS", "Angular", "TypeScript", "RevealJS"],
    "Projet en construction dans le cadre du cours de recherche et développement. Exploration d'Angular et présentation du framework. Création d'un projet avec des cartes pokemon pour comprendre les bases.",
    ["Programmation"],
    "Novrembre 2024",
    {
      github: "https://github.com/ClemeDigs/angular.git",
      vercel: "https://angular-iota-lilac.vercel.app/",
      télécharger: docAngular,
    }
  ),
  new Projet(
    5,
    "Un Zeste de Clémentine",
    imgUnZeste,
    "Page d'accueil de Un Zeste de Clémentine",
    ["HTML", "Tailwind", "JavaScript"],
    "Projet dans le cadre du cours d'interface mobile. Implémentation d'un panier fonctionnel, des produits générés par une classe Javascript, un formulaire et une infolettre avec validation de courriel.",
    ["Programmation", "Design"],
    "Juin 2024",
    {
      github:
        "https://github.com/ClemeDigs/tl-02_interface-mobile_clementine.git",
      vercel: "https://tl-02-interface-mobile-v4.vercel.app/",
    }
  ),
  new Projet(
    6,
    "La Ruche",
    imgLaRuche,
    "Mockup de La Ruche",
    ["Figma", "Adobe Illustrator"],
    "Projet dans le cadre du cours de Design Web. Création d'un concept, recherche sur les utilisateurs, les compétiteurs, User Flow. Design d'un parcours utilisateur, des maquettes filaires, des maquettes haute fidélité, du prototypage final et du UI kit.",
    ["Design"],
    "Mai 2024",
    {
      figma:
        "https://www.figma.com/proto/m67k5H1VJST5X5zTyHnCzc/UI-Kit?page-id=105%3A1849&node-id=170-4765&viewport=300%2C-652%2C0.17&t=Q4qBzwFfLy6BzsaH-1&scaling=scale-down&starting-point-node-id=170%3A4765&classId=52aee0ef-409a-4d8a-a7fc-2b90b0636a3d&assignmentId=c197be93-1dcb-46c4-ad53-bff9c08867a1&submissionId=bde25ec6-03c2-704f-2825-055fe319821e",
    }
  ),
  new Projet(
    7,
    "Divers projets UI",
    imgDesignChallenge,
    "Design d'une page produit",
    ["Figma"],
    "Projets réalisés au cours de la session de Design Web. Recherche, maquettes filaires, User Flows, utilisation de Figma, de banques de composants. Chaque challenge porte sur un thème différent. Interface utilisateur, formulaire, page produit d'une boutique en ligne, landing page, billet d'avion.",
    ["Design"],
    "Mai 2024",
    {
      figma:
        "https://www.figma.com/design/MNcl76WxCnkE1PFmhAVFmb/Design-Challenge---Cl%C3%A9mentine?node-id=0-1&t=mBXoIvAPB7hUoJXM-1",
    }
  ),
  new Projet(
    8,
    "Motion Design",
    imgMotionDesign,
    "Mosaique d'une image extraite de l'animation",
    ["Adobe After Effects", "Adobe Animate"],
    "Projet dans le cadre du cours de production d'animation. Production d'une courte vidéo de Motion Design. Dessin, animation, esthétique.",
    ["Design"],
    "Avril 2024",
    { youtube: "https://youtu.be/NhTsudZq918" }
  ),
  new Projet(
    9,
    "Rapport de recommandations",
    imgCafeSmith,
    "Image de présentation du rapport",
    ["Figma"],
    "Projet dans le cadre du cours d'ergonomie de l'interface. Tâches réalisées: Audit ergonomique et rapport de recommandations. Travail d'équipe sur le site web du café Smith, afin de repérer les points à améliorer et proposer des recommandations.",
    ["Design"],
    "Mars 2024",
    {
      figma:
        "https://www.figma.com/design/HR4FMSZ5Ys4pRzluCWs1Q6/Rapport-de-recommandations?node-id=0-1&t=XJjF06yBTPOWHypM-1",
      télécharger: docRecommandations,
    }
  ),
  new Projet(
    10,
    "Jeux divers",
    imgJeux,
    "Interfaces des jeux",
    ["HTML", "CSS", "JavaScript"],
    "Petits projets divers, personnels ou dans le cadre des cours en javascript vanille. Jeu des couleurs, pierre feuille ciseaux, morpion et jeu de mémoire.",
    ["Programmation"],
    "Janvier 2024",
    {
      vercel: "https://jeux-one.vercel.app/",
    }
  ),
  new Projet(
    11,
    "Palette aléatoire",
    imgPalette,
    "Interface de la palette aléatoire",
    ["HTML", "CSS", "JavaScript"],
    "Projet dans le cadre du cours d'interactivité de l'interface. Création d'une palette aléatoire générée aléatoirement en fonction de la première couleur. Calcul des valeurs HSL en JavaScript.",
    ["Programmation"],
    "Février 2024",
    {
      github: "https://github.com/ClemeDigs/Color-generator.git",
      vercel: "https://color-generator-smoky.vercel.app/",
    }
  ),
  new Projet(
    12,
    "Incubateur A2",
    imgA2,
    "Page projets de A2",
    ["Figma", "Adobe Illustrator"],
    "Projet dans le cadre du premier cours de Design Web. Le thème est un incubateur. Recherche sur le marché, les utilisateurs et les compétiteurs. Recherche de références. Design de deux pages, création des illustrations et des animations.",
    ["Design"],
    "Décembre 2023",
    {
      figma:
        "https://www.figma.com/design/v9XCB5gp2OReOfhRMsE9eI/A2?node-id=1-1154&t=U84hwU2J22RiCKQ1-1",
    }
  ),
];
