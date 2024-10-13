import utilities from "../utilities/utilities";
import checkoutObject from "./checkoutObject";

class CheckoutAction{
     async clickCheckOutButton(){
          await checkoutObject.checkoutButton.click();
     }
     async setFirstName(firstName){
          await checkoutObject.firstName.setValue(firstName);
     }
     async setLastName(lastName){
          await checkoutObject.lastName.setValue(lastName);
     }
     async setPostalCode(postCode){
          await checkoutObject.postalCode.setValue(postCode);
     }
     async clickContinueButton(){
          await checkoutObject.continueButton.click();
     }
     
     async productNameCheckout(i){
          let productName ;
          productName = await $(`//div[@class='cart_list']/descendant::div[@class='inventory_item_name'][${i}]`).getText();
          //console.log(await productName);
          return productName;
     }
     async productPriceCheckout(i){
          let productPrice ;
          let priceText = await $(`//div[@class='cart_list']/descendant::div[@class='inventory_item_price'][${i}]`).getText();
          productPrice = utilities.trimsFloat(priceText) ;
          return productPrice;
     }
     async totalPrice(){
          let totalPriceText = await checkoutObject.grandPrice.getText();
          let result = utilities.trimsFloat(totalPriceText);
          return result;
     }
     async clickFinishButton(){
          await checkoutObject.finishedButton.click();
     }
     async clickBackHomeButtons(){
          await checkoutObject.backHome.click();
     }
     async completeOrderMessage(){
          return await checkoutObject.completeOrder.getText();
     }

     async checkout(n,firstName,lastName,postCode){
          await this.clickCheckOutButton();
          await this.setFirstName(firstName);
          await this.setLastName(lastName);
          await this.setPostalCode(postCode);
          await browser.pause(1000);
          await this.clickContinueButton();
        //  await this.clickFinishButton();
        //  await this.clickBackHomeButtons()
     }

}
export default new CheckoutAction();