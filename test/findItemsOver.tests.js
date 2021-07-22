describe('The findItemsOver function...', function () {
    it('should return all the products that have quantities within a 20 items threshold in the itemList', function () {
        assert.deepEqual(results, findItemsOver(itemList, 20));
    });
    it('should return all the products that have quantities within a 20 items threshold in itemList2', function () {
        assert.deepEqual(results2, findItemsOver(itemList2, 20));
    });
    it('should return all the products that have quantities within a 20 items threshold in itemList3', function () {
        assert.deepEqual(results3, findItemsOver(itemList3, 20));
    });
});