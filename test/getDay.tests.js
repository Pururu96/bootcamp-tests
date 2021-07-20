describe('this test' , function(){
    it('should show the exact day of the week of a particular date' , function(){
        assert.equal(getDay('2010-04-01'), "Thursday");
        assert.equal(getDay('2012-02-13'), "Monday");
    });
});