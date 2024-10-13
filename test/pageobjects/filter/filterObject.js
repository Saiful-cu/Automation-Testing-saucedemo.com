class FilterObject{
     get filter(){
          return $("//span[@class='select_container']");
     }
     get filterA_Z(){
          return $("//option[contains(.,'Name (A to Z)')]");
     }
     get filterZ_A(){
          return $("//option[contains(.,'Name (Z to A)')]");
     }
     get filterLowToHigh(){
          return $("//option[contains(.,'Price (low to high)')]");
     }
     get filterHighToLow(){
          return $("//option[contains(.,'Price (high to low)')]");
     }
}

export default new FilterObject();