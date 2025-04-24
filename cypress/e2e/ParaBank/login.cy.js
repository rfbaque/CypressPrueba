const { loginUsuario } = require("../../utils/login")
const UsuarioFicticio = "UsuarioNoExiste"

describe('Inicio Sesion en Parabank', () => {

  let usuarioData;

  before(function () {

    cy.fixture('usuario').then(function (data) {
      usuarioData = data
    })
  })

  it('Inicio de sesion sin ingresar los campos usuario y contrasenia', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get(':nth-child(5) > .button').click()
    cy.get('.error').should('include.text', 'Please enter a username and password.')
  })

  it('Inicio de sesion con usuario que no existe', () => {
    loginUsuario(UsuarioFicticio, UsuarioFicticio)
    cy.get('p').should('include.text', 'The username and password could not be verified.')
  })

  it('Inicio de sesion con usuario existente y credenciales incorrectas', () => {
    loginUsuario(usuarioData.password, usuarioData.username)
    cy.get('.error').should('include.text', 'The username and password could not be verified.');
  })

  it('Inicio de sesion con usuario existente y credenciales correctas', () => {
    loginUsuario(usuarioData.username, usuarioData.password)
    cy.get('h2').should('include.text', 'Account Services')
  })
})
