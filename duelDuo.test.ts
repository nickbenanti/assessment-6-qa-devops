
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button works', async () =>{
    const drawBtn = await driver.findElement(By.id('draw'))
    await drawBtn.click()
    await driver.sleep(5000)
})

test('add to duo button adds to your duo', async ()=>{
    const addBtn = await driver.findElement(By.xpath(`//button[contains(text(),"chooseBot(7)")`))
    await addBtn.click()
    await driver.sleep(5000)
})
