export default class DialogManager {
  constructor(projets) {
    this.projets = projets;
    this.dialog = document.getElementById("dialog-projets");
    this.dialogContentHtml = this.dialog.querySelector(".dialog-content");
    this.btnNext = this.dialog.querySelector(".btn-next");
    this.btnPrevious = this.dialog.querySelector(".btn-previous");
    this.dialogs = document.querySelectorAll(".dialog");
    this.btnsClose = document.querySelectorAll(".btn-close");

    this.initializeEventListeners();
  }

  initializeEventListeners() {
    this.btnNext.addEventListener("click", () => this.showNextProject());

    this.btnPrevious.addEventListener("click", () =>
      this.showPreviousProject()
    );

    window.addEventListener("click", (e) => this.handleWindowClick(e));

    this.dialogs.forEach((dialog) => this.addCloseOnOutsideClick(dialog));

    this.btnsClose.forEach((btnClose) =>
      btnClose.addEventListener("click", () => this.closeAllDialogs())
    );
  }

  showNextProject() {
    let currentIndex = parseInt(
      this.dialogContentHtml.getAttribute("data-index"),
      10
    );
    currentIndex =
      currentIndex < this.projets.length - 1 ? currentIndex + 1 : 0;
    this.updateDialogContent(currentIndex);
  }

  showPreviousProject() {
    let currentIndex = parseInt(
      this.dialogContentHtml.getAttribute("data-index"),
      10
    );
    currentIndex =
      currentIndex > 0 ? currentIndex - 1 : this.projets.length - 1;
    this.updateDialogContent(currentIndex);
  }

  updateDialogContent(index) {
    this.dialogContentHtml.setAttribute("data-index", index);
    this.dialogContentHtml.innerHTML = "";
    this.dialogContentHtml.appendChild(this.projets[index].toDetailHtml());
  }

  handleWindowClick(event) {
    const target = event.target;
    const dialogSelector = target.getAttribute("data-dialog");

    if (dialogSelector) {
      const dialog = document.querySelector(dialogSelector);
      if (dialog) {
        if (dialog.hasAttribute("open")) {
          this.closeDialog(dialog);
        } else {
          dialog.setAttribute("open", "");
        }
      }
    }
  }

  addCloseOnOutsideClick(dialog) {
    dialog.addEventListener("click", () => this.closeDialog(dialog));

    const childrens = dialog.querySelectorAll(":scope > *");
    childrens.forEach((child) =>
      child.addEventListener("click", (e) => e.stopImmediatePropagation())
    );
  }

  closeDialog(dialog) {
    dialog.setAttribute("closing", "");
    dialog.addEventListener(
      "animationend",
      () => {
        dialog.removeAttribute("open");
        dialog.removeAttribute("closing");
      },
      { once: true }
    );
  }

  closeAllDialogs() {
    this.dialogs.forEach((dialog) => this.closeDialog(dialog));
  }
}
