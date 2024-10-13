import utilities from "../utilities/utilities";
import addToCartObject from "./addToCartObject";

class AddToCartAction {
     productNames = [];
     productPrices = [];
     async clickAddToCartButton(n) {
          let i = 1;
          while (i <= n) {
               await $(`//div[@class='inventory_list']/descendant::button[${i}]`).click();
               i++;
          }
     }
     
     async productNameHome(i) {
          let productNameElement = await $(`//div[@class='inventory_list']/descendant::div[@class='inventory_item_name '][${i}]`).getText();
          return productNameElement;
     }
     async productPriceHome(i) {
          let priceText = await $(`//div[@class='inventory_list']/descendant::div[@class='inventory_item_price'][${i}]`).getText();
          let productPrice = utilities.trimsFloat(await priceText); 
          return productPrice;
     }

     async clickProduct() {
          await addToCartObject.productView.click();
     }
     async clickCart() {
          await addToCartObject.cartView.click();
     }

     async addToCart(n) {
          await this.clickAddToCartButton(n); 
     }
}

export default new AddToCartAction();