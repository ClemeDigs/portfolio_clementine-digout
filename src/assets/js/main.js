import "animate.css";
import WOW from "wow.js";
import "./animations.js";
import { projets } from "./projets.js";

import DialogManager from "./Dialog_Manager.js";
import ScrollHandler from "./Scroll_Handler.js";
import Slider from "./Slider.js";
import HoverManager from "./Hover_Manager.js";
import FilterManager from "./Filter_Manager.js";
import AnimationManager from "./Animation_Manager.js";

import "./generate_theme-manager.js";
import "./generate_div-projet";

const imgBanner = document.querySelector(".img__banner");
const imgBanner2 = document.querySelector(".img__banner-2");
const btnSwitchTheme = document.querySelector(".theme-switcher");

const hoverManager = new HoverManager(imgBanner, imgBanner2);
const slider = new Slider();
const dialogManager = new DialogManager(projets);
const filterManager = new FilterManager(slider);
const scrollHandler = new ScrollHandler(btnSwitchTheme);
const animationManager = new AnimationManager();
new WOW().init();

/* import data from "../data/projets.json";

const img = document.createElement("img");
img.setAttribute("src", data[0].img);

document.querySelector("body").appendChild(img);
 */
