// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)


const cucumber = require('cypress-cucumber-preprocessor').default
const environmentProd = require('../environments/environment.prod')
const environmentCi = require('../environments/environment.ci')
 
module.exports = (on, config) => {
 on('file:preprocessor', cucumber())


  if (config.env.NODE_ENV === 'prod') {
    const merged = Object.assign({}, config, environmentProd);
    return merged;
  }

  if (config.env.NODE_ENV === 'ci') {
    const merged = Object.assign({}, config, environmentCi);
    return merged;
  }

  return config;
}