import {test , expect} from '@playwright/test'

// test("radio button",async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/")

//     await page.locator('//input[@id="male"]').check()
//     await expect(page.locator('//input[@id="male"]')).toBeChecked()
//     await expect(page.locator('//input[@id="female"]')).not.toBeChecked()

//     // await page.waitForTimeout(3000)

//     await page.pause()

// })

// test("checkbox",async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/")

//     await page.locator('//input[@id="monday"]').check()
//     await expect(page.locator('//input[@id="monday"]')).toBeChecked() 
//     await page.locator('//input[@id="monday"]').uncheck()
//     await expect(page.locator('//input[@id="monday"]')).not.toBeChecked() 

//     await page.pause()

// })

test("multiple checkout",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    let locat=['//input[@id="sunday"]','//input[@id="tuesday"]','//input[@id="thursday"]','//input[@id="saturday"]']

    for(let print of locat){
        await page.locator(print).check()
        await expect(page.locator(print)).toBeChecked()
    }

    await page.pause()
})