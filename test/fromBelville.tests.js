describe('this test' , function(){
    it('should show you if the origin of a vehicle registration number is Belville or not' , function(){
        assert.equal(isFromBellville('CY 123'), true);
        assert.equal(isFromBellville('CJ 123'), false);
    });
});