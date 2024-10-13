
class Utilities{

     trimsFloat(value){
          //console.log(value);
          const floatValue = parseFloat(value.replace(/[^0-9.]/g, ''));
          //console.log(floatValue);
          return floatValue;
     }
     
}

export default new Utilities();