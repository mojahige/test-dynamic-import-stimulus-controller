import { Controller } from "https://cdn.skypack.dev/@hotwired/stimulus";

export default class extends Controller {
  static targets = ["name", "output"];

  greet() {
    this.outputTarget.textContent = `Hello, ${this.nameTarget.value}!`;
  }
}
