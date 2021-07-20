describe('this test', function () {
    it('should compare if the weekdays of two dates are the same or not', function () {
        assert.equal(sameWeekday('2016-11-19', '2016-11-26'), true);
        assert.equal(sameWeekday('2016-11-19', '2016-11-28'), false);
    });
});