/**
 * @vitest-environment happy-dom
 */
import { expect, it, describe, beforeAll, afterAll } from "vitest";
import { getTargets } from "../index";

describe("getTargets", () => {
  beforeAll(() => {
    document.body.innerHTML = `
      <!-- 😑 -->
      <div data-controller="foo"></div>

      <!-- 😎 -->
      <div data-controller="bar" lazy-controller></div>
    `;
  });

  afterAll(() => {
    document.body.innerHTML = "";
  });

  it("Can retrieve elements with appropriate attributes.", () => {
    expect(getTargets()).toHaveLength(1);
  });
});
