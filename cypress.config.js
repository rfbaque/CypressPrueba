const { defineConfig } = require("cypress");
//const mochawesome = require('cypress-mochawesome-reporter/plugin');

module.exports = defineConfig({
  e2e: {
   //setupNodeEvents(on, config) {
     /// // implement node event listeners here
     //mochawesome(on); // Configura el plugin de Mochawesome
     //return config;
    //},

    specPattern: '/Users/rfbaque/Documents/CypressPrueba/cypress/e2e/**/*.cy.js',
  },
});

