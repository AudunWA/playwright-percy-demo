import { test, expect } from "@playwright/test";
import percySnapshot from "@percy/playwright";

test("NDC homepage looks good", async ({ page }) => {
  // Wait until page is fully loaded
  await page.goto("/ndc_oslo_index.html", {
    waitUntil: "networkidle",
  });
  // Uncomment if you want to dismiss cookie notice
  // await page
  //   .locator("div.cookie-notice__button")
  //   .getByText("Don't want it")
  //   .click();

  // Uncomment to make some "unintentional" CSS changes
  // await page
  //   .locator(".main__header-title")
  //   .evaluate((element) => (element.style.marginLeft = "-10px"));
  // await page
  //   .locator(".links__container")
  //   .evaluate((element) => (element.style.marginTop = "-70px"));
  // await page
  //   .locator(".menu__item--link-white")
  //   .getByText("Tickets")
  //   .evaluate((element) => {
  //     element.remove();
  //   });

  // Take a snapshot and send to Percy
  // Set opacity of main content to 1 as it the frozen animation starts at opacity 0
  await percySnapshot(page, "NDC home page", {
    percyCSS: ".page-transition {opacity: 1 !important;}",
  });
});
