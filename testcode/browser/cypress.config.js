const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'ymhxfj',
  fixturesFolder: false,
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    supportFile: false,
  },
})
