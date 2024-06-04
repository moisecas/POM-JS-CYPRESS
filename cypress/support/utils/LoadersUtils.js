class LoadersUtils {

  loadExcelSpreadsheet(fileName, buttonUpload){
    cy.fixture(fileName, 'binary')
    .then(Cypress.Blob.binaryStringToBlob)
    .then(fileContent => {
      buttonUpload.attachFile({ fileContent, fileName, mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', encoding:'utf8' })
    })
  }
    
}

export const loadersUtils = new LoadersUtils();