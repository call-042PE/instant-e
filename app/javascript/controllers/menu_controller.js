import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "exit", "menu" ]
  connect() {
  }
  menu() {
    this.exitTarget.classList.remove("hidden");
    this.menuTarget.classList.add("hidden");
    document.querySelector(".menu-phone").classList.remove("hidden");

    document.querySelector(".navbar-phone").classList.add("fixed");
    document.querySelector(".navbar-phone").classList.remove("static");

    document.querySelector(".menu-phone").classList.add("menu-phone-enter-anim");

    document.body.style.overflowY = "hidden";
  }
  exit() {
    this.exitTarget.classList.add("hidden");
    this.menuTarget.classList.remove("hidden");

    document.querySelector(".navbar-phone").classList.remove("fixed");
    document.querySelector(".navbar-phone").classList.add("static");

    document.querySelector(".menu-phone").classList.add("hidden");

    document.querySelector(".menu-phone").classList.remove("menu-phone-enter-anim");

    document.body.style.overflowY = "scroll";
  }
}
