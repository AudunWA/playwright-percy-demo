import { test, expect } from "@playwright/test";
import percySnapshot from "@percy/playwright";

test("NDC homepage page looks good", async ({ page }) => {
  // Wait until page is fully loaded
  await page.goto("https://ndcoslo.com/", {
    waitUntil: "networkidle",
  });
  // await page.waitForTimeout(5000);
  // const transitionDiv = await page.locator(".page-transition").elementHandle();
  // transitionDiv.

  // Dismiss cookie notice
  await page
    .locator("div.cookie-notice__button")
    .getByText("Don't want it")
    .click();

  // await page
  //   .locator(".links__container")
  //   .evaluate((element) => (element.style.marginTop = "-70px"));
  // await page.locator(".main__header-center").evaluate((element) => {
  //   element.style.fontSize = "24px";
  // });
  // await page
  //   .locator(".jsx-3601836161")
  //   .getByText("Get Tickets")
  //   .evaluate((element) => {
  //     element.remove();
  //   });
  // await page
  //   .locator(".page-transition")
  //   .evaluate((element) => (element.style.opacity = "1"));

  // Take a snapshot and send to Percy
  await percySnapshot(page, "NDC program page", {
    percyCSS: ".page-transition {opacity: 1 !important;}",
  });
});
