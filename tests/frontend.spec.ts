import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("onboarding validates every step and completes", async ({ page }) => {
  await page.goto("/onboarding");
  await page.getByRole("button", { name: "Next", exact: true }).click();
  await expect(page.getByRole("alert").filter({ hasText: "Choose a role" })).toContainText("Choose a role");
  await page.getByRole("button", { name: /^Student/ }).click();
  await page.getByRole("button", { name: "Next", exact: true }).click();
  for (const name of ["Web Development", "Mobile Development", "Cloud Computing"]) await page.getByRole("button", { name, exact: true }).click();
  await page.getByRole("button", { name: "Next", exact: true }).click();
  await page.getByLabel("Preferred Career Path").selectOption("Software Engineer");
  await page.getByLabel("What are your career goals?").fill("Build accessible web applications.");
  await page.getByRole("button", { name: "Next", exact: true }).click();
  await page.getByRole("slider", { name: "React proficiency", exact: true }).fill("60");
  await page.getByRole("button", { name: "Next", exact: true }).click();
  await page.getByRole("radio", { name: "Student", exact: true }).check();
  await page.getByLabel("Project link 1").fill("javascript:alert(1)");
  await page.getByRole("button", { name: "Next", exact: true }).click();
  await expect(page.getByRole("alert").filter({ hasText: "valid http" })).toContainText("valid http");
  await page.getByLabel("Project link 1").fill("https://example.com/project");
  await page.getByRole("button", { name: "Next", exact: true }).click();
  await page.getByRole("button", { name: "Internships", exact: true }).click();
  await page.getByRole("button", { name: "Next", exact: true }).click();
  await page.getByRole("button", { name: "Complete & Go to Dashboard" }).click();
  await expect(page).toHaveURL(/\/student$/);
});

test("opportunity drafts persist, validate, publish and delete", async ({ page }) => {
  await page.goto("/industry/opportunities/new");
  await page.getByRole("button", { name: "Publish Demo Opportunity" }).click();
  await expect(page.getByText("Role title is required.", { exact: true })).toBeVisible();
  await page.getByLabel("Role Title").fill("Accessible frontend intern");
  await page.getByRole("button", { name: "Save as Draft" }).click();
  await expect(page).toHaveURL(/\/industry\/opportunities$/);
  await page.reload();
  const item = page.getByRole("article").filter({ hasText: "Accessible frontend intern" });
  await item.getByRole("link", { name: "Edit" }).click();
  await expect(page.getByLabel("Role Title")).toHaveValue("Accessible frontend intern");
  await page.getByLabel("Description", { exact: true }).fill("Build accessible components and responsive user interfaces.");
  await page.getByLabel("Location", { exact: true }).fill("Bangalore");
  await page.getByLabel("Duration").fill("6 months");
  await page.getByLabel("Application Deadline").fill("2099-12-31");
  await page.getByLabel("Eligibility").fill("Students");
  await page.getByRole("button", { name: "React", exact: true }).first().click();
  await page.getByRole("button", { name: "Publish Demo Opportunity" }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.getByRole("button", { name: "Add to demo", exact: true }).click();
  await expect(item).toContainText("active");
  await item.getByRole("button", { name: "Delete" }).click();
  await page.getByRole("dialog").getByRole("button", { name: "Delete", exact: true }).click();
  await expect(item).toHaveCount(0);
});

test("key routes fit mobile and expose the correct navigation", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  for (const route of ["/", "/onboarding", "/student", "/industry/opportunities", "/industry/opportunities/new", "/institution", "/faculty", "/admin"]) {
    await page.goto(route);
    await expect(page.locator("h1").first()).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), route).toBe(true);
  }
  await page.getByRole("button", { name: "Toggle menu" }).click();
  await expect(page.getByRole("navigation", { name: "Mobile navigation" }).getByRole("link", { name: "Organizations" })).toBeVisible();
});

test("forms and opportunity management have no serious automated accessibility violations", async ({ page }) => {
  for (const route of ["/onboarding", "/industry/opportunities/new", "/industry/opportunities"]) {
    await page.goto(route);
    await page.locator("h1").first().waitFor();
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
    expect(results.violations.filter((v) => ["critical", "serious"].includes(v.impact ?? "")), route).toEqual([]);
  }
});

test("practice assessment scores answers and supports retry", async ({ page }) => {
  await page.goto("/student/assessment/a1");
  await page.getByRole("button", { name: "Submit answers" }).click();
  await expect(page.getByText("Answer every question before submitting.")).toBeVisible();
  await page.getByRole("radio", { name: "useState", exact: true }).check();
  await page.getByRole("radio", { name: "A stable key from the data" }).check();
  await page.getByRole("radio", { name: "Create a new array and use the setter" }).check();
  await page.getByRole("button", { name: "Submit answers" }).click();
  await page.getByRole("button", { name: "See results" }).click();
  await expect(page.getByRole("region", { name: "Your practice result" })).toContainText("100%");
  await page.reload();
  await expect(page.getByRole("region", { name: "Your practice result" })).toContainText("3 of 3 correct");
});

test("profile modal validates links, contains focus and restores it", async ({ page }) => {
  await page.goto("/student/profile");
  const trigger = page.getByRole("button", { name: "Edit Profile" });
  await trigger.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await page.getByLabel("Portfolio URL").fill("javascript:alert(1)");
  await page.getByRole("button", { name: "Save profile" }).click();
  await expect(dialog).toContainText("Enter a valid http or https URL.");
  await page.getByLabel("Portfolio URL").fill("https://example.com");
  await page.getByLabel("First name", { exact: true }).fill("Demo");
  await page.getByRole("button", { name: "Save profile" }).click();
  await expect(dialog).toHaveCount(0);
  await expect(trigger).toBeFocused();
  await page.reload();
  await expect(page.getByRole("heading", { name: "Demo Sharma" })).toBeVisible();
  await trigger.click();
  await page.keyboard.press("Escape");
  await expect(trigger).toBeFocused();
});

test("applications and projects persist without sending data", async ({ page }) => {
  await page.goto("/opportunities/2");
  await page.getByRole("button", { name: "Try demo application" }).click();
  await page.getByRole("button", { name: "Save demo application" }).click();
  await page.goto("/student/applications");
  const applications = page.getByRole("region", { name: "Saved demo applications" });
  await expect(applications).toContainText("Full Stack Engineer");
  await applications.getByRole("button", { name: "Remove demo application" }).click();
  await page.getByRole("dialog").getByRole("button", { name: "Confirm", exact: true }).click();
  await expect(applications).toContainText("No demo applications yet");
  await page.goto("/student/projects");
  await page.getByRole("button", { name: "Add Project" }).click();
  await page.getByLabel("Project title").fill("Portfolio test");
  await page.getByLabel("Description", { exact: true }).fill("Accessible portfolio project");
  await page.getByLabel("Technologies (comma separated)").fill("React, TypeScript");
  await page.getByLabel("Repository URL").fill("https://example.com/repo");
  await page.getByRole("button", { name: "Save project" }).click();
  await page.reload();
  await expect(page.getByRole("region", { name: "Your demo projects" })).toContainText("Portfolio test");
});
