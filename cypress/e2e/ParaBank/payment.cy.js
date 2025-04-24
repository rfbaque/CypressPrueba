const { PagoFactura } = require("../../utils/pago")
const { loginUsuario } = require("../../utils/login")

describe('Pago de dinero', () => {

    let pagoData, usuarioData, cuentaOrigen;

    before(function () {

        cy.fixture('pago').then(function (data) {
            pagoData = data
        })

        cy.fixture('usuario').then(function (data) {
            usuarioData = data
        })
    })

    it('Realizar Pagos con informacion vacia', () => {


        cy.log('El usuario debe estar autenticado')
        loginUsuario(usuarioData.username, usuarioData.password)
        cy.get('h2').should('include.text', 'Account Services')
        cy.get('#leftPanel > ul > :nth-child(4) > a').click()
        cy.get(':nth-child(14) > :nth-child(2) > .button').click()


    })

    it('Realizar Pago exitoso', () => {

        cy.log('El usuario debe estar autenticado')
        loginUsuario(usuarioData.username, usuarioData.password)
        cy.get('h2').should('include.text', 'Account Services')

        cy.get('#leftPanel > ul > :nth-child(4) > a').click()

        cy.get('select[name="fromAccountId"]')
            .then(($el) => {
                usuarioData.accountfrom = $el.text();
            });

        PagoFactura(pagoData.payeename, pagoData.address, pagoData.city, pagoData.state, pagoData.zipcode,
            pagoData.phone, pagoData.account, pagoData.accountverified, pagoData.amount, pagoData.accountfrom)

        cy.get(':nth-child(14) > :nth-child(2) > .button').click()

        cy.get('#billpayResult > .title').should('include.text', 'Bill Payment Complete')
    })


    it('Pago fallido: La cuenta de destino no coincide con la verificacion de cuenta ', () => {

        cy.log('El usuario debe estar autenticado')
        loginUsuario(usuarioData.username, usuarioData.password)
        cy.get('h2').should('include.text', 'Account Services')

        cy.get('#leftPanel > ul > :nth-child(4) > a').click()

        cy.get('select[name="fromAccountId"]')
            .then(($el) => {
                usuarioData.accountfrom = $el.text();
            });

        pagoData.accountverified = "123456789"
        PagoFactura(pagoData.payeename, pagoData.address, pagoData.city, pagoData.state, pagoData.zipcode,
            pagoData.phone, pagoData.account, pagoData.accountverified, pagoData.amount, pagoData.accountfrom)

        cy.get(':nth-child(14) > :nth-child(2) > .button').click()
        
       
    })


})