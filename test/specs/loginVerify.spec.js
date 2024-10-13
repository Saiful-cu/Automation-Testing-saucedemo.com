const { expect } = require('@wdio/globals')
const { default: loginAction } = require('../pageobjects/login/loginAction');

describe('Verify the Login', () => {
   before(async () => {
      await browser.url('https://www.saucedemo.com/');
  });

   it('should successfully login with valid credentials ', async () => {
      //await browser.url('https://www.saucedemo.com/');

      await loginAction.loginFunction('standard_user', 'secret_sauce');
      
   });
});