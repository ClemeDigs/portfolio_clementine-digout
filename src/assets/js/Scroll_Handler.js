export default class ScrollHandler {
  constructor(btnSwitchTheme) {
    this.header = document.querySelector("body header");
    this.body = document.body;
    this.btnSwitchTheme = btnSwitchTheme;

    this.initializeEventListeners();
  }

  handleScroll() {
    if (this.body.classList.contains("theme-color")) {
      if (document.documentElement.scrollTop > 100) {
        this.header.classList.add("minimized");
      } else {
        this.header.classList.remove("minimized");
      }
    } else {
      this.header.classList.remove("minimized");
    }
  }

  initializeEventListeners() {
    window.addEventListener("scroll", () => this.handleScroll());
    this.btnSwitchTheme.addEventListener("click", () => this.handleScroll());
  }
}
