describe('this test' , function(){
    it('should show you if the origin of a vehicle registration number is Gauteng or not' , function(){
        assert.equal(isFromGauteng('DR 45 LR GP'), true); 
        assert.equal(isFromGauteng('CJ 123 908'), false);
    });
});