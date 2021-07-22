describe('The mostProfitableDay function...', function () {
    it('should return the most profitable day of a department in the salesData object list', function () {
        assert.equal('Thursday', mostProfitableDay(salesData), "Most profitable day is 'Thursday' for dataset 1");
    });
    it('should return the most profitable day of a department in the salesData2 object list', function () {
        assert.equal('Wednesday', mostProfitableDay(salesData2), "Most profitable day is 'Wednesday' for dataset 2");
    });
});