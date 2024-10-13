import { expect } from '@wdio/globals';
import { default as hamburgerAction } from '../pageobjects/HamburgerMenu/hamburgerAction';
import { default as addToCartAction } from '../pageobjects/addToCart/addToCartAction';
import { default as checkoutAction } from '../pageobjects/checkout/checkoutAction';
import filterAction from '../pageobjects/filter/filterAction';
import loginAction from '../pageobjects/login/loginAction';


describe('Filter product ,  Add To Cart , Checkout and Verify ',()=> {

     before(async () => {
          await browser.url('https://www.saucedemo.com/');
      });
    
     it('should successfully login with valid credentials ', async () => {
          await loginAction.loginFunction('performance_glitch_user', 'secret_sauce');
          
     });

     it('should add product and verify name and price', async()=>{
          await hamburgerAction.hamburgerOperation("Reset App State");
          let n =1;

     // Filter product
     await filterAction.clickFilter();
     await filterAction.filterProduct("Z to A");


     //add TO Cart Section
     
          await addToCartAction.addToCart(n);

          let expectedProductName = [];
          let expectedProductPrice = [];
          
          let j=1;
          while(j<=n){
               expectedProductName[j-1] = await addToCartAction.productNameHome(j);
               expectedProductPrice[j-1] = await addToCartAction.productPriceHome(j);
               //console.log(expectedProductName[j-1]);
              // console.log(expectedProductPrice[j-1]);
               j++
          }

          await addToCartAction.clickCart();
     
     // CheckOut section

          let actualProductName = [];
           let actualProductPrice = [];

          await checkoutAction.checkout(n,"Md Saiful","Islam",1234);
          let i =1, grandTotal=0;
          while(i<=n){
               actualProductName[i-1] = await checkoutAction.productNameCheckout(i);
               actualProductPrice[i-1] = await checkoutAction.productPriceCheckout(i);
              grandTotal += await checkoutAction.productPriceCheckout(i); 
             i++;
          }
          const actualTotal = await checkoutAction.totalPrice();
     // Verify the name and prices
          let k=0;
          while(k<n){
               await expect(expectedProductName[k]).toContain(actualProductName[k]);
               await expect(expectedProductPrice[k]).toEqual(actualProductPrice[k]);
               k++;
          }

     // Verify The price

          await expect(grandTotal).toEqual(actualTotal);

     // Finish the purchase
          await checkoutAction.clickFinishButton();
     
     //  Verify the successful order message
          await expect(await checkoutAction.completeOrderMessage()).toContain('Thank you for your order!');
     
          await checkoutAction.clickBackHomeButtons();
     // reset the app state
          await hamburgerAction.hamburgerOperation("Reset App State");
          await hamburgerAction.clickLogout();    

          
         
     });


});