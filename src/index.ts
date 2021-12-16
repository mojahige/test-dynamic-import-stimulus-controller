import { contentLoaded } from "./contentLoaded";
import type { Application } from "@hotwired/stimulus";

export function getTargets() {
  return document.querySelectorAll<HTMLElement>(
    "[data-controller][lazy-controller]"
  );
}

export function start(application: Application) {
  if (application == undefined) {
    throw new Error("application is undefined");
  }

  contentLoaded().then(() => {
    getTargets().forEach((target) => {
      const name = target.dataset.controller;

      if (typeof name == "string") {
        import(`/${name}_controller.js`).then((module) => {
          application.register(name, module.default);
        });
      }
    });
  });
}
