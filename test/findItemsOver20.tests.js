describe('The findItemsOver20 function...', function () {
    it('should return all the products that have a quantity over 20 in the itemList', function () {
        assert.deepEqual(results, findItemsOver20(itemList));
    });
    it('should return all the products that have a quantity over 20 in itemList2', function () {
        assert.deepEqual(results2, findItemsOver20(itemList2));
    });
    it('should return all the products that have a quantity over 20 in itemList3', function () {
        assert.deepEqual(results3, findItemsOver20(itemList3));
    });
});