class GeneralUtils {

  pageLoadedComplete(){
    cy.window().should(win => {
      expect(win.document.readyState).to.equal('complete');
    })
  }
}

export const generalUtils = new GeneralUtils();