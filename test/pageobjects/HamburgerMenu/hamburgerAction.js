import hamburgerObject from "./hamburgerObject";

class HamburgerAction{
     async clickHamburgerMenu(){
          await hamburgerObject.hamburgerMenuButton.click();
     }
     async clickHamburgerCross(){
          await hamburgerObject.hamburgerCrosseButton.click();
     }
     async clickAllItems(){
          await hamburgerObject.hamburgerMenu_All_Items.click();
     }
     async clickAbout(){
          await hamburgerObject.hamburgerMenu_About.click();
     }
     async clickLogout(){
          await hamburgerObject.hamburgerMenu_Logout.click();
     }
     async clickResetAppState(){
          await hamburgerObject.hamburgerMenu_Reset_App_State.click();
     }

     async actionMenu(text){
          if(text === 'All Items'){
               await this.clickAllItems();
          }
          else if(text === 'About'){
               await this.clickAbout();
          }
          else if(text === 'Logout'){
               await this.clickLogout();
          }
          else {
               await this.clickResetAppState();
          }
     }
     async hamburgerOperation(text){
          await this.clickHamburgerMenu();
          await browser.pause(1000);
          await this.actionMenu(text);
          await browser.pause(1000);
          await this.clickHamburgerCross();
          
     }
}

export default new HamburgerAction();