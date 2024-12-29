class BalancePlayer {
    elements = {
        userBox: () => cy.get('.w-100 > .input-group > .form-control'),
        confirmUser: () => cy.get('.list-group-item'),
        filter: () => cy.get('.mb-3 > .btn'),
        export: () => cy.get('.justify-content-between > :nth-child(2) > .waves-effect'),
    }

    userBox() {
        this.elements.userBox().type('MIKETYSON');
    }

    confirmUser() {
        this.elements.confirmUser().click();
    }

    filter() {
        cy.wait(2000);
        this.elements.filter().click();
    }

    export() {
        this.elements.export().click();
    }

}

export const balancePlayer = new BalancePlayer() 