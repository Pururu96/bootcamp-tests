
 var itemList = [
  { name: 'apples', qty: 10 },
  { name: 'pears', qty: 37 },
  { name: 'bananas', qty: 27 },
  { name: 'apples', qty: 3 },
];

var results = [
  { name: 'pears', qty: 37 },
  { name: 'bananas', qty: 27 },
];

var itemList2 = [
  { name: 'apples', qty: 10 },
  { name: 'pears', qty: 19 },
  { name: 'bananas', qty: 17 },
  { name: 'apples', qty: 3 },
];

var results2 = [];

var itemList3 = [
  { name: 'apples', qty: 40 },
  { name: 'pears', qty: 20 },
  { name: 'bananas', qty: 23 },
  { name: 'apples', qty: 37 }
];

var results3 = [
  { name: 'apples', qty: 40 },
  { name: 'bananas', qty: 23 },
  { name: 'apples', qty: 37 }
];

function findItemsOver(object,threshold){ 
    var itemsOver20 = [];
   for(var prop in object){
     if(object[prop].qty>threshold){
      itemsOver20.push(object[prop]);
     }
  //console.log(object[prop].length);
   } 
   return itemsOver20;
  }