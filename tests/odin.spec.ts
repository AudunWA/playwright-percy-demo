import { test, expect } from "@playwright/test";
import percySnapshot from "@percy/playwright";

test("ODIN program page looks good", async ({ page }) => {
  // Wait until page is fully loaded
  await page.goto("/odin_program.html", { waitUntil: "networkidle" });
  // Take a snapshot and send to Percy
  await percySnapshot(page, "ODIN program page");
});
