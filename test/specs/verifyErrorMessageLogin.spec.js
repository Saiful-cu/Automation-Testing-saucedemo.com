const { expect } = require('@wdio/globals')
const { default: loginAction } = require('../pageobjects/login/loginAction');
const { default: loginObject } = require('../pageobjects/login/loginObject');

describe('Verify the error message', () => {
   it('should show an error message with empty password ', async () => {
      await browser.url('https://www.saucedemo.com/');

      await loginAction.loginFunction('locked_out_user', '');
      const errorMessage = await loginObject.errorMessage;
      //console.log(errorMessage);

      await expect(errorMessage).toHaveText('Epic sadface: Password is required');
   });

   it('should show an error message  locked_out_user and valid password credentials', async () => {
      //  await browser.url('https://www.saucedemo.com/');

      await loginAction.loginFunction('locked_out_user', 'secret_sauce');

      const errorMessage = await loginObject.errorMessage;
      // console.log(errorMessage);

      await expect(errorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.');
   });


   it('should show an error message  locked_out_user and Invalid password credentials', async () => {
      // await browser.url('https://www.saucedemo.com/');

      await loginAction.loginFunction('locked_out_user', 'sauce');
      const errorMessage = await loginObject.errorMessage;
      //console.log(errorMessage);
      await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
   });
})

