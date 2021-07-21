function fromWhere(vehReg){ 
    if(vehReg.startsWith('CY')){
      return 'Bellville';
    }
    else if(vehReg.startsWith('CJ')){
      return 'Paarl';
    }
    else if(vehReg.startsWith('CA')){
      return 'Cape Town';
    }
    else{
      return 'Some other place!';
    }
  };