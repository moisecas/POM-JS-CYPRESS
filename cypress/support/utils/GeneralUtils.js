class GeneralUtils {
  
  pageLoadedComplete(){
    cy.window().should(win => {
      expect(win.document.readyState).to.equal('complete');
    })
  }

  validatePathUrlOfPageLoaded(pathUrlToValidate){
    this.pageLoadedComplete();
    cy.url().should('include', pathUrlToValidate);
  }

  validateFullUrlOfPageLoaded(urlToValidate){
    this.pageLoadedComplete();
    cy.url().should('eq', urlToValidate);
  }

}
export const generalUtils = new GeneralUtils();