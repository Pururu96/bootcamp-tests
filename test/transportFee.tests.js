describe('this test', function () {
    it('should determine the correct transport cost by shift', function () {
        assert.equal(transportFee('morning'), 'R20');
        assert.equal(transportFee('afternoon'), 'R10');
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    });
});