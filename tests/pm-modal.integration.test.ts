// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import "@project-manager/pm-modal";

const fixturePath = resolve(process.cwd(), "tests/fixtures/pm-modal.html");

describe("pm-modal integration", () => {
  beforeEach(() => {
    const html = readFileSync(fixturePath, "utf8");
    document.body.innerHTML = html;
  });

  it("registers the pm-modal element and sets attributes", async () => {
    const modal = document.querySelector("pm-modal");
    expect(modal).toBeTruthy();
    expect(modal?.getAttribute("id")).toBe("demo-modal");
    expect(modal?.getAttribute("heading")).toBe("Aviso de prueba");
  });

  it("opens and closes via public methods", async () => {
    const modal = document.querySelector("pm-modal");
    expect(modal?.openModal).toBeInstanceOf(Function);
    expect(modal?.close).toBeInstanceOf(Function);

    modal?.openModal();
    if (modal && "updateComplete" in modal) {
      await modal.updateComplete;
    }
    expect(modal?.hasAttribute("open")).toBe(true);

    modal?.close();
    if (modal && "updateComplete" in modal) {
      await modal.updateComplete;
    }
    expect(modal?.hasAttribute("open")).toBe(false);
  });

  it("renders inner text content from the slot", () => {
    const modal = document.querySelector("pm-modal");
    const text = modal?.textContent || "";
    expect(text).toContain("Contenido de prueba.");
  });
});
