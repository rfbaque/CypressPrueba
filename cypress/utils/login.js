export function loginUsuario(username, password){
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get(':nth-child(2) > .input').type(username)
    cy.get(':nth-child(4) > .input').type(password)
    cy.get(':nth-child(5) > .button').click() 
  }
