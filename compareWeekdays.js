function sameWeekday(date1, date2){
    var firstDate = new Date (date1);
    var secondDate = new Date (date2);
    
    if(firstDate.getDay() == secondDate.getDay()){
      return true;
    } else{
      return false
    };
  };