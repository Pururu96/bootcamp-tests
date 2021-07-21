describe('this test', function () {
    it('should count the exact number of vehicle registration numbers from any town in a string', function () {
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');

        assert.equal(fromStellies, 3)
        assert.equal(fromKuilsriver, 1)
    });
});