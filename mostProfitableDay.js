function mostProfitableDay(salesData){
    const salesdataMap = {};
    for (var i = 0; i < salesData.length; i++){
      const salesdata = salesData[i];
      salesdataMap[salesdata.day] = 0;
    }
    for (var i = 0; i < salesData.length; i++){
      const salesdata = salesData[i];
      var currentDayTotal = salesdataMap[salesdata.day];
      currentDayTotal += salesdata.sales;
      salesdataMap[salesdata.day] = currentDayTotal;
    }
    var maxSales = 0;
    var currentDay = '';
    for(const salesday in salesdataMap){
    const currentSalesDaysales = salesdataMap[salesday];
    if(currentSalesDaysales > maxSales){
         maxSales = currentSalesDaysales;
         currentDay = salesday;
         }
    }
      return currentDay;
    }