class CheckoutObject{
     get checkoutButton(){
          return $("//button[@id ='checkout']");
     }
     get firstName(){
          return $("//input[@placeholder='First Name']");
     }
     get lastName(){
          return $("//input[@placeholder='Last Name']");
     }
     get postalCode(){
          return $("//input[@placeholder='Zip/Postal Code']")
     }
     get continueButton(){
          return $("//input[@id='continue']")
     }
     get grandPrice(){
          return $("//div[@class='summary_subtotal_label']");
     }
     get finishedButton(){
          return $("//button[@id='finish']");
     }
     get backHome(){
          return $("//button[@id='back-to-products']")
     }
     get completeOrder(){
          return $("//div[@class='checkout_complete_container']/descendant::h2");
     }

}
export default new CheckoutObject();