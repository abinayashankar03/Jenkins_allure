import {test,expect} from '@playwright/test'

test("list of countries",async({page})=>{
    await page.goto("https://www.google.com/")

    let text=await page.$$('//div[@id="SIvCob"]/a')

    // for(let i=0;i<= text.length-1 ; i++){
    //     let texts=await text[i].textContent()
    //     console.log(texts)
    // }

    
    for(let texts of text){
        
        let country = await texts.textContent()
        console.log(country);
        
    }
    
})