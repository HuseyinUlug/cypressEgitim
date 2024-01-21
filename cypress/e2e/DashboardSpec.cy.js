import 'cypress-xpath';
import methods from '../Pages/Methods'
import dashboardLocator from '../fixtures/dashboardLocator';

describe("dashboard", () => {
    it("Sepete eklenen ürünün fiyat kotrolü", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.fillInput(dashboardLocator.searchTextBox, 'Acme Drawstring Bag{enter}')
        methods.clickButton(dashboardLocator.acmeDrawstringBagButton)
        methods.clickButton(dashboardLocator.selectWhiteColor,1000)
        methods.clickButton(dashboardLocator.selectSize7x9)
        methods.clickButton(dashboardLocator.addToCartButton)
        methods.shouldHaveText(dashboardLocator.totalPrice,"Total$7.00USD")
        methods.clickButton(dashboardLocator.plusButton)
        methods.shouldHaveText(dashboardLocator.totalPrice,"Total$14.00USD")
                
    })

    it("About Buton testi", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(dashboardLocator.aboutButton)
        methods.checkTextIsVisible('Support for real-world commerce features including: ', true)
        
    })

    it("Shipping And Return Policy Buton testi", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(dashboardLocator.shippingAndReturnPolicyButton)
        methods.checkTextIsVisible('This document was last updated on April 20, 2023.', true)
        
    })

    it("Privacy Policy Buton testi", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(dashboardLocator.privacyPolicyButton)
        methods.checkTextIsVisible('Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio.', true)
        
    })    

    it("FAQ Buton testi", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(dashboardLocator.faqButton)
        methods.checkTextIsVisible('Frequently Asked Questions', true)
        
    })

    it("Home Buton testi", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(dashboardLocator.faqButton)
        methods.clickButton(dashboardLocator.homeButton)
        methods.shouldHaveItem(dashboardLocator.homeTshirtElement)
        
    }) 

    it("Terms & Conditions Buton testi", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(dashboardLocator.termsConditionsButton)
        methods.checkTextIsVisible('Dictumst quisque sagittis purus sit amet volutpat consequat.', true)
        
    }) 

})