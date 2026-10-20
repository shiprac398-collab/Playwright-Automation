export class HomePage 

{
    constructor(page) {
        this.page = page
        this.registerlink=page.locator("//a[text()='Register']") /*x path of the link of the register button = assigning to the variable registerlink */
    }

    async goTo() /*method to open the browser*/
    {
        await this.page.goto('https://parabank.parasoft.com/parabank/index.htm')
    }
     
    async clickRegisterLink()
    {
        await this.registerlink.click()  /*clicking on the register button saved on the variable "registerlink"*/
        

    }

}