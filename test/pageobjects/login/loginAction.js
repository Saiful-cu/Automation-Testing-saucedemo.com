import loginObject from "./loginObject";

class LoginAction{
     async setUsername(username){
          await loginObject.username.setValue(username);
     }
     async setPassword(passCode){
          await loginObject.password.setValue(passCode);
     }

     async clickLoginButton(){
          await loginObject.loginButton.click();
     }
     // async errorMessageText(){
     //      await loginObject.errorMessage.g;
     // }
     async loginFunction(username,passCode){
          await this.setUsername(username);
          await browser.pause(1000);
          await this.setPassword(passCode);
          await browser.pause(1000);
          await this.clickLoginButton();
     }
}

export default new LoginAction();