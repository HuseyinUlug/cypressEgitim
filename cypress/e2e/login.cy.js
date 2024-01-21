import 'cypress-xpath';
import methods from '../Pages/Methods'

describe("login", () => {
    it("login", () => {
        cy.visit("https://demo.vercel.store/")
        cy.xpath('//a[@href="/search/stickers"]').click()
        methods.checkUrl('https://demo.vercel.store/search/stickers')
        methods.checkPathname('/search/stickers')
        methods.checkProtocol('https:')
        })

    })
