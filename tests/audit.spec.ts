import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import fs from "node:fs";
import path from "node:path";
function routes(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => entry.isDirectory() ? routes(path.join(dir, entry.name)) : entry.name === "page.tsx" ? [dir.replace("src/app", "") || "/"] : []);
}
test("audit public demo routes on mobile and desktop", async ({ page }) => {
  test.setTimeout(360_000);
  const findings: unknown[] = [];
  const routeList = routes("src/app").filter((route) => !route.includes("[") && !route.includes("sign-"));
  for (const width of [390, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routeList) {
      const errors: string[] = [];
      const capture = (error: Error) => errors.push(error.message);
      page.on("pageerror", capture);
      const response = await page.goto(route);
      await page.locator("h1").first().waitFor();
      if (route === "/") {
        const height = await page.evaluate(() => document.documentElement.scrollHeight);
        for (let offset = 0; offset < height; offset += 700) { await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), offset); await page.waitForTimeout(80); }
        await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
      }
      await page.waitForTimeout(1200);
      const overflow = await page.evaluate(() => ({ width: innerWidth, scroll: document.documentElement.scrollWidth, elements: Array.from(document.querySelectorAll("body *")).filter((el) => el.getBoundingClientRect().right > innerWidth + 1 && getComputedStyle(el).position !== "fixed").slice(0, 8).map((el) => ({ tag: el.tagName, class: el.className, text: el.textContent?.slice(0, 50) })) }));
      const a11y = width === 390 ? (await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze()).violations.map((v) => ({ id: v.id, impact: v.impact, targets: v.nodes.map((n) => n.target) })) : [];
      if (overflow.scroll > width || a11y.length || errors.length || response?.status() !== 200) findings.push({ route, width, status: response?.status(), overflow: overflow.scroll > width ? overflow : undefined, a11y, errors });
      fs.writeFileSync("/tmp/nexvia-audit.json", JSON.stringify(findings, null, 2));
      page.off("pageerror", capture);
      if (["/", "/industry/opportunities", "/student"].includes(route)) await page.screenshot({ path: `/tmp/nexvia-${route.replaceAll("/", "-") || "home"}-${width}.png`, fullPage: true });
    }
  }
  fs.writeFileSync("/tmp/nexvia-audit.json", JSON.stringify(findings, null, 2));
  expect(findings).toEqual([]);
});
