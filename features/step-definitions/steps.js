import { Given, When, Then, Before, After } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';


Before(async () => {
    // Log message before each scenario
    console.log('Starting a new session before the scenario...');
});

After(async () => {
    // Log message after each scenario
    console.log('Closing the session after the scenario...');
});

Given(/^I am on the login page$/, async () => {
    // Navigate to the login page
    await browser.url('http://the-internet.herokuapp.com/login');
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    // Perform the login action
    await LoginPage.login(username, password);
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    // Verify that the flash message appears
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});
