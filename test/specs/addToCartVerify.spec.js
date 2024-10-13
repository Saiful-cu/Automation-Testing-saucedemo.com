const { expect } = require('@wdio/globals');
const { default: hamburgerAction } = require('../pageobjects/HamburgerMenu/hamburgerAction');
const { default: addToCartAction } = require('../pageobjects/addToCart/addToCartAction');
const { default: checkoutAction } = require('../pageobjects/checkout/checkoutAction');
const { default: loginAction } = require('../pageobjects/login/loginAction');


describe('Login , Product Add To Cart(without filter) and Verify ',()=> {

     before(async () => {
          await browser.url('https://www.saucedemo.com/');
      });
    
       it('should successfully login with valid credentials ', async () => {
          await loginAction.loginFunction('standard_user', 'secret_sauce');
          
       });

     it('should add product and verify name and price', async()=>{
          await hamburgerAction.hamburgerOperation("Reset App State");
          let n =3;

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
     // console.log('Products Name and Price are same');

// Verify The Total price

          await expect(grandTotal).toEqual(actualTotal);
      // console.log('Expected total and actual Total are same');

// Finish the purchase
          await checkoutAction.clickFinishButton();
     
//  Verify the successful order message
          await expect(await checkoutAction.completeOrderMessage()).toContain('Thank you for your order!');
     //  console.log('The order is completed successfully');
          await checkoutAction.clickBackHomeButtons();
// reset the app state
          await hamburgerAction.hamburgerOperation("Reset App State");
          await hamburgerAction.clickLogout();    

          
         
     });


});