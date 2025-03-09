import path from "path";
import { argv } from "yargs";
import wdioParallel from "wdio-cucumber-parallel-execution";


const sourceSpecDirectory = `features`;
let featureFilePath = `${sourceSpecDirectory}/*.feature`;

if (argv.parallel === 'true') {
    const tmpSpecDirectory = `${sourceSpecDirectory}/tmp`;
    wdioParallel.performSetup({
        sourceSpecDirectory: sourceSpecDirectory,
        tmpSpecDirectory: tmpSpecDirectory,
        cleanTmpSpecDirectory: true
    });
    featureFilePath = `${tmpSpecDirectory}/*.feature`;
}
export const config = {
    specs: [featureFilePath],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        browserVersion: 'latest',
        platformName: 'Windows 11',
        resolution: '1920x1200',
        build: `Cucumber Framework Parallel Scenarios`,
        console: false,
        network: false,
        terminal: false,
        visual: true,
    }],

    hostname: 'hub.lambdatest.com',
    port: 80,
    path: '/wd/hub',
    logLevel: "trace",
    bail: 0,
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    user: process.env.LT_USERNAME,
    key: process.env.LT_ACCESS_KEY,
    framework: 'cucumber',
    reporters: ['spec'],

    cucumberOpts: {
        require: ['./features/step-definitions/steps.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    }
};
