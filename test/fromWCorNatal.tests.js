describe('this test' , function(){
    it('should show you if the origin of a vehicle registration number is Western Cape/KZN' , function(){
        var fromPaarl = isFrom('CJ 98912', 'CJ'); //returns true
        var fromBellville = isFrom('CJ 98912', 'CY'); //returns false

        assert.equal(fromPaarl, true, 'Should be from Paarl');
        assert.equal(fromBellville, false, 'Should be from Bellville - starting with CY');
    });
});