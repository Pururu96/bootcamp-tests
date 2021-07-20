describe('this test' , function(){
    it('should show you if the origin of a vehicle registration number is Limpopo or not' , function(){
        assert.equal(isFromLimpopo('KTR 990 L'), true);
        assert.equal(isFromLimpopo('W 990 N'), false);
    });
});