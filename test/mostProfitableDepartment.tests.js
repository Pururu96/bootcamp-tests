describe('The mostProfitableDepartment function...', function () {
    it('should return the department that has made the most sales in the salesdata object list', function () {
        assert.equal('outdoor', mostProfitableDepartment(salesData), "Most profitable department is 'outdoor' for dataset 1");
    });
    it('should return the department that has made the most sales in the salesdata2 object list', function () {
        assert.equal('electronics', mostProfitableDepartment(salesData2), "Most profitable department is 'electronics' for dataset 2");
    });
});