
const { loginUsuario } = require("../../utils/login")

describe('Transferencia de fondos entre cuentas', () => {
    let usuarioData;

    before(function () {

        cy.fixture('usuario').then(function (data) {
            usuarioData = data
        })
    })

    it('Transferir dinero sin ingresar el valor del monto', () => {
     
        cy.log('El usuario debe estar autenticado')
        loginUsuario(usuarioData.username, usuarioData.password)
        cy.get('h2').should('include.text', 'Account Services')
        cy.get('#leftPanel > ul > :nth-child(3) > a').click()
        cy.get(':nth-child(4) > .button').click()
        cy.get('#showError > .error').should('include.text','An internal error has occurred and has been logged.')
    })

    it('Transferencia de dinero exitosa', () => {
     
        cy.log('El usuario debe estar autenticado')
        loginUsuario(usuarioData.username, usuarioData.password)
        cy.get('h2').should('include.text', 'Account Services')
        cy.get('#leftPanel > ul > :nth-child(3) > a').click()
        cy.log('Asignando el valor de la transferencia')
        cy.get('#amount').type(500)
        cy.get(':nth-child(4) > .button').click()
        cy.get('#showResult > .title').should('include.text','Transfer Complete!')
        cy.wait(1000) 
    })

})