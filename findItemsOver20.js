function findItemsOver20(object){ 
    var itemsOver20 = [];
   for(var prop in object){
     if(object[prop].qty>20){
      itemsOver20.push(object[prop]);
     }
  //console.log(object[prop].length);
   } 
   return itemsOver20;
  }