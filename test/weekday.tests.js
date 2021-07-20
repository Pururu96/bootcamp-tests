describe('this test', function () {
    it('should show the day of the week and return a boolean', function () {
        assert.equal(isWeekday('Saturday'), false);
        assert.equal(isWeekday('Monday'), true);
    });
});