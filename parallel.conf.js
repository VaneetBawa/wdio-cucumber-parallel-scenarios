import path from "path";
export const config = {
    specs: [
        './features/**/*.feature'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
   
    maxInstances: 10,
   
    capabilities: [{
        maxInstances: 5,
         browserName: 'chrome',
         browserVersion: '109',
         platformName: 'Windows 10',
         resolution: '1920x1200',
         build: `Cucumber Framework`,
         console: false,
         network: false,
         terminal: false,
         visual: true
      },
      {
         browserName: 'Firefox',
         platform: 'Windows 10',
         version: 'latest',
         resolution: '1920x1200',
         build: `cucumber Framework`,
         console: false,
         network: false,
         terminal: false,
         visual: true
       }
    ],
    hostname: 'hub.lambdatest.com',
    port: 80,
    path: '/wd/hub',
    logLevel: "trace",
    outputDir: path.resolve(__dirname, "logs"),
    bail: 0,

    baseUrl: 'http://localhost',
  
    waitforTimeout: 10000,
  
    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    user: process.env.LT_USERNAME,
    key: process.env.LT_ACCESS_KEY,
    logFile : './logDir/api.log',
    services: [
        ['lambdatest']
    ],
  
    framework: 'cucumber',
 
    reporters: ['spec'],


    //
    // If you are using Cucumber you need to specify the location of your step definitions.
    cucumberOpts: {
        // <string[]> (file/dir) require files before executing features
        require: ['./features/step-definitions/steps.js'],
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        requireModule: [],
        // <boolean> invoke formatters without executing steps
        dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string> (expression) only execute the features or scenarios with tags matching the expression
        tagExpression: '',
        // <number> timeout for step definitions
        timeout: 60000,
        // <boolean> Enable this config to treat undefined definitions as warnings.
        ignoreUndefinedDefinitions: false
    },
}
