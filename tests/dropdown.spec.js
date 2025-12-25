import {test , expect} from '@playwright/test'

test.skip("single select dropdown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const cnt=await page.locator('//select[@id="country"]/option').count()
    console.log(cnt)

    const txt=await page.locator('//select[@id="country"]').textContent()
    console.log(txt)

    // await page.locator('//select[@id="country"]').selectOption("Australia")
    // await page.locator('//select[@id="country"]').selectOption({value:"uk"})
    await page.locator('//select[@id="country"]').selectOption({index:4})

    await page.pause()
})

test("multi select dropdown",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('//select[@id="colors"]').selectOption(["Red","Blue","Green"])

    await page.pause()
})