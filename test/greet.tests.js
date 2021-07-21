describe('this test' , function(){
    it('should show if the correct person is greeted' , function(){
       assert.equal(greet('Bob'), 'Hello, Bob');
       assert.equal(greet('Sam'), 'Hello, Sam');
    });
});