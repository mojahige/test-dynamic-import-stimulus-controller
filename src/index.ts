import { contentLoaded } from "./contentLoaded";
import type { Application } from "@hotwired/stimulus";

export function start(application: Application) {
  if (application == undefined) {
    throw new Error("application is undefined");
  }

  contentLoaded().then(() => {
    document
      .querySelectorAll<HTMLElement>("[data-controller][lazy-controller]")
      .forEach((target) => {
        const name = target.dataset.controller;

        if (typeof name == "string") {
          import(`/${name}_controller.js`).then((module) => {
            application.register(name, module.default);
          });
        }
      });
  });
}
