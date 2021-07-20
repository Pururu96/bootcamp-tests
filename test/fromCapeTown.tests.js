describe('this test' , function(){
    it('should show you if the origin of a vehicle registration number is Cape Town or not' , function(){
        assert.equal(isFromCapeTown('CA 123 908'), true);
        assert.equal(isFromCapeTown('CJ 123 908'), false);
    });
});