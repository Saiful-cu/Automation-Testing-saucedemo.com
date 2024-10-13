class LoginObject{
     get username(){
          return $("//input[@placeholder ='Username' and @id = 'user-name']")
     }

     get password(){
          return $("//input[@placeholder ='Password' or @name = 'password']")
     }
     get loginButton(){
          return $("//input[@id='login-button' and @name = 'login-button']")
     }
     get errorMessage(){
          return $("//div[@class='error-message-container error']/descendant::h3")
     }
}
export default new LoginObject();