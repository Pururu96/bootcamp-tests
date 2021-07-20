function getDay(yearMonthDay){
    const date = new Date(yearMonthDay);
    var weekDays = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];  
   return weekDays[date.getDay()];
  };