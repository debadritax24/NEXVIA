import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./tests", timeout: 60_000, workers: 1,
  use: { baseURL: "http://localhost:3000", headless: true, launchOptions: { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH }, trace: "retain-on-failure" },
});
