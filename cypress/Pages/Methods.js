class Methods {

    visit(url = "/") {
        cy.visit(url);
    }
    findElement(locator){
      if(locator.startsWith('/')){
        return cy.xpath(locator)
      }else{
        return cy.xpath(locator)
      }
    }
    clickButton(locator,afterWait=0){
      return this.findElement(locator).click({force:true}).wait(afterWait)
    }
    fillInput(locators,text, delay = 0){
      return this.findElement(locators).first().clear().type(text, { delay: delay })
    }
    mouseHover(locator){
      return cy.xpath(locator).eq(0).trigger('mouseover',{multiple:true}).click()
    }
    wait(time){
      return cy.wait(time)
    }
    shouldHaveText(locators,text){
      this.wait(1000)
      return cy.xpath(locators).should('have.text', text)
    }
    checkTextIsVisible(text, visibility = true) {
      cy.contains('body', text).should(visibility ? 'be.visible' : 'not.exist');
    }
    shouldHaveItem(locators){
      return cy.xpath(locators).should('exist')
    }
    checkPathname(expectedPathname){
      cy.location().should((location) => {
        expect(location.pathname).to.eq(expectedPathname);
      });
    }
    checkUrl(expectedUrl){
      cy.url().should('eq', expectedUrl);
    }
    checkProtocol(expectedProtocol){
      cy.url().should('include', expectedProtocol);
    }

}

export default new Methods(); 