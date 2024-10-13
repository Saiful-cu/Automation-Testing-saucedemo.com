class AddToCartObject{
     get productView(){
         return $("//div[@class='inventory_list']/descendant::div[@class='inventory_item'][1]")
     }
     get cartView(){
        return $("//div[@id='shopping_cart_container']")
     }
}
export default new AddToCartObject();