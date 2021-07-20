describe('this test' , function(){
    it('should show the day of the week and return an a string when a parameter is not a day of the week' , function(){
        assert.equal(isDayName('Saturday'), true);
        assert.equal(isDayName('Monday'), true);
        assert.equal(isDayName('January'), false, 'January is not a day');
        
    });
});