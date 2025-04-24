export function PagoFactura(payeename, address, city, state, zipcode, phone, account, accountverified, amount, accountfrom) {
    cy.visit('https://parabank.parasoft.com/parabank/billpay.htm')
    cy.get(':nth-child(1) > [width="20%"] > .input').type(payeename)
    cy.get(':nth-child(2) > [width="20%"] > .input').type(address)
    cy.get(':nth-child(3) > [width="20%"] > .input').type(city)
    cy.get(':nth-child(4) > [width="20%"] > .input').type(state)
    cy.get(':nth-child(5) > [width="20%"] > .input').type(zipcode)
    cy.get('input[name="payee.phoneNumber"]').type(phone)
    cy.get(':nth-child(8) > :nth-child(2) > .input').type(account)
    cy.get(':nth-child(9) > [width="20%"] > .input').type(accountverified)
    cy.get(':nth-child(11) > [width="20%"] > .input').type(amount)
    cy.get(':nth-child(14) > :nth-child(2) > .button').click()
}
