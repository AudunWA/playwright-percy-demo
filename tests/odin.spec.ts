import { test, expect } from "@playwright/test";
import percySnapshot from "@percy/playwright";

test("DND page looks good", async ({ page }) => {
  // Wait until page is fully loaded
  await page.goto("/dnd_homepage_broken.html", { waitUntil: "networkidle" });
  // Take a snapshot and send to Percy
  await percySnapshot(page, "DND index page");
});
