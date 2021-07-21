function countAllFromTown(vehReg, RegLoc){
    var vehRegNum = vehReg.split(',');
    var counter =0;
   for(var i=0; i<vehRegNum.length; i++){
     //Get each item in the loop
    const currentVehReg = vehRegNum[i].trim();
     //Check if this is the item you are looking for
    if(currentVehReg.includes(RegLoc)){
      counter++;
    }
  }
    return counter;
  };