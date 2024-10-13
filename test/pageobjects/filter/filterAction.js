import filterObject from "./filterObject";

class FilterAction{
     async clickFilter(){
          await filterObject.filter.click();
     }
     async sort_AtoZ(){
          await filterObject.filterA_Z.click();
     }
     async sort_ZtoA(){
          await filterObject.filterZ_A.click();
     }
     async sort_LowToHigh(){
          await filterObject.filterLowToHigh.click();
     }
     async sort_HighToLow(){
          await filterObject.filterHighToLow.click();
     }

     async sortProduct(way){
          if(way === 'A to Z'){
               await this.sort_AtoZ();
          }
          else if(way === 'Z to A'){
               await this.sort_ZtoA();
          }
          else if(way === 'low to high'){
               await this.sort_LowToHigh();
          }
          else{
               await this.sort_HighToLow();
          }
     }
     async filterProduct(way){
          await this.clickFilter();
          await this.sortProduct(way);
     }
}

export default new FilterAction();