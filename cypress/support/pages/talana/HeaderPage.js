import { generalUtils } from "../../utils/GeneralUtils"; 

class HeaderPage {
    elements = {
        bussinessSelector: () => cy.get('.t-header > [slot="base-selector"] > #selectCompany > .inputValueWrapper'), //seleccion de negocio 
        businessSelectorList: () => cy.get('.t-header > [slot="base-selector"] > #selectCompany > #list-companies-can-manage > #company-1415'),
        modulesSelector: () => cy.get('.t-header > .worldSelected'),
        modulesSelectorList: (module) => cy.get('.t-header > [text="' + module + '"]'), //seleccion de modulo 
    }
    
        writeBusinessInSelector(business) {
            this.elements.businessSelector().click().type(business);
        }

        selectTheBusinessInDropDown(business){
            this.elements.businessSelectorList().contains(business).click()
        }
    
        changeBusiness(business) {
            this.writeBusinessInSelector(business)
            this.selectTheBusinessInDropDown(business)
        }
    
        viewSelectedBusiness(business) {
            generalUtils.pageLoadedComplete()
            this.elements.businessSelector().should('have.value', business);
        }
        
        clickInModulesSelector(){
            this.elements.modulesSelector().click()
        }
        
        clickInModulesSelectorList(module){
            this.elements.modulesSelectorList(module).click()
        }
    
        changeModule(module){
            this.clickInModulesSelector()
            this.clickInModulesSelectorList(module)
        }
  
}

export const headerPage = new HeaderPage(); 