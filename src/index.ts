import { contentLoaded } from "./contentLoaded";
import type { Application } from "@hotwired/stimulus";

export async function start(application: Application) {
  if (application == undefined) {
    throw new Error("application is undefined");
  }

  await contentLoaded();

  document
    .querySelectorAll<HTMLElement>("[data-controller][lazy-controller]")
    .forEach((target) => {
      const name = target.dataset.controller;
      const path = target.dataset.controllerPath ?? "/";

      if (name != undefined) {
        import(`${path}${name}_controller.js`).then((module) => {
          application.register(name, module.default);
        });
      }
    });
}
