class HamburgerObject{
     get hamburgerMenuButton(){
          return $("//div[@class='bm-burger-button']");
     }
     get hamburgerCrosseButton(){
          return $("//button[@id='react-burger-cross-btn']");
     }
     get hamburgerMenu_All_Items(){
          return $("//nav[@class='bm-item-list']/descendant::a[contains(.,'All Items')]")
     }
     get hamburgerMenu_About(){
          return $("//nav[@class='bm-item-list']/descendant::a[contains(.,'About')]")
     }
     get hamburgerMenu_Logout(){
          return $("//nav[@class='bm-item-list']/descendant::a[contains(.,'Logout')]")
     }
     get hamburgerMenu_Reset_App_State(){
          return $("//nav[@class='bm-item-list']/descendant::a[contains(.,'Reset App State')]")
     }

}
export default new HamburgerObject();