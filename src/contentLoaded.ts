export function contentLoaded(): Promise<void> {
  return new Promise((resolve) => {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => {
        resolve();
      });
    }

    resolve();
  });
}
