
describe('Registrar usuario en Parabank', () => {
    let usuarioData;
    before(function () {
        cy.fixture('usuario').then(function (data) {
            usuarioData = data
        })
    })

    it('Registrar un usuario sin informacion', () => {

        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.visit('https://parabank.parasoft.com/parabank/register.htm')
        cy.get('[colspan="2"] > .button').click()
        cy.get('#customer\\.firstName\\.errors').should('include.text', 'First name is required.')
        cy.get('#customer\\.lastName\\.errors').should('include.text', 'Last name is required.')
        cy.get('#customer\\.address\\.street\\.errors').should('include.text', 'Address is required.')
        cy.get('#customer\\.address\\.city\\.errors').should('include.text', 'City is required.')
        cy.get(':nth-child(5) > [width="50%"]').should('include.text', 'State is required.')
        cy.get('#customer\\.address\\.zipCode\\.errors').should('include.text', 'Zip Code is required.')
        cy.get('#customer\\.ssn\\.errors').should('include.text', 'Social Security Number is required.')
        cy.get('#customer\\.username\\.errors').should('include.text', 'Username is required.')
        cy.get('#customer\\.password\\.errors').should('include.text', 'Password is required.')
        cy.get(':nth-child(12) > [width="50%"]').should('include.text', 'Password confirmation is required.')
    })

   it('Se ingresan los datos requeridos pero las contrasenias no coinciden', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.visit('https://parabank.parasoft.com/parabank/register.htm')
        cy.get('#customer\\.firstName').type(usuarioData.firstname)
        cy.get('#customer\\.lastName').type(usuarioData.lastname)
        cy.get('#customer\\.address\\.street').type(usuarioData.addressstreet)
        cy.get('#customer\\.address\\.city').type(usuarioData.addresscity)
        cy.get('#customer\\.address\\.state').type(usuarioData.addressstate)
        cy.get('#customer\\.address\\.zipCode').type(usuarioData.addresszipcode)
        cy.get('#customer\\.phoneNumber').type(usuarioData.phonenumber)
        cy.get('#customer\\.ssn').type(usuarioData.ssn)
        cy.get('#customer\\.username').type(usuarioData.username)
        cy.get('#customer\\.password').type(usuarioData.password)
        cy.get('#repeatedPassword').type('Password1')
        cy.get('[colspan="2"] > .button').click()
        cy.get(':nth-child(12) > [width="50%"]').should('include.text', 'Passwords did not match.')
    })


    it('Se realiza un registro exitoso', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.visit('https://parabank.parasoft.com/parabank/register.htm')
        cy.get('#customer\\.firstName').type(usuarioData.firstname)
        cy.get('#customer\\.lastName').type(usuarioData.lastname)
        cy.get('#customer\\.address\\.street').type(usuarioData.addressstreet)
        cy.get('#customer\\.address\\.city').type(usuarioData.addresscity)
        cy.get('#customer\\.address\\.state').type(usuarioData.addressstate)
        cy.get('#customer\\.address\\.zipCode').type(usuarioData.addresszipcode)
        cy.get('#customer\\.phoneNumber').type(usuarioData.phonenumber)
        cy.get('#customer\\.ssn').type(usuarioData.ssn)
        cy.get('#customer\\.username').type(usuarioData.username)
        cy.get('#customer\\.password').type(usuarioData.password)
        cy.get('#repeatedPassword').type(usuarioData.password)
        cy.get('[colspan="2"] > .button').click()
        cy.get('h2').should('include.text', 'Account Services')

    })


    it('Se intenta registrar usuario con un username ya registrado', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.visit('https://parabank.parasoft.com/parabank/register.htm')
        cy.get('#customer\\.firstName').type(usuarioData.firstname)
        cy.get('#customer\\.lastName').type(usuarioData.lastname)
        cy.get('#customer\\.address\\.street').type(usuarioData.addressstreet)
        cy.get('#customer\\.address\\.city').type(usuarioData.addresscity)
        cy.get('#customer\\.address\\.state').type(usuarioData.addressstate)
        cy.get('#customer\\.address\\.zipCode').type(usuarioData.addresszipcode)
        cy.get('#customer\\.phoneNumber').type(usuarioData.phonenumber)
        cy.get('#customer\\.ssn').type(usuarioData.ssn)
        cy.get('#customer\\.username').type(usuarioData.username)
        cy.get('#customer\\.password').type(usuarioData.password)
        cy.get('#repeatedPassword').type(usuarioData.password)
        cy.get('[colspan="2"] > .button').click()
        cy.get('#customer\\.username\\.errors').should('include.text', 'This username already exists.')

    })

})


