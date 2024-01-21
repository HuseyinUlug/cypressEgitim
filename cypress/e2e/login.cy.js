import 'cypress-xpath';
import methods from '../Pages/Methods'

describe("login", () => {
    it("login", () => {
        methods.visit()
        methods.clickButton('//a[@href="/search/stickers"]'))
        methods.checkUrl('https://demo.vercel.store/search/stickers')
        methods.checkPathname('/search/stickers')
        methods.checkProtocol('https:')
        })

    })
