const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: "https://demo.vercel.store/",
    video:true,
    watchForFileChanges:false,
    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 20000,
    experimentalOriginDependencies: true,
    experimentalModifyObstructiveThirdPartyCode: true,
    blockHosts:[
    ]
    
  },
});
