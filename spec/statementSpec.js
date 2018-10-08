describe("Statement", function () {

  var statement;

  beforeEach(function () {
    statement = new Statement();
  });

  it("initializes with empty transactions array", function () {
    expect(statement._transactions).toEqual([]);
  });

  describe("#update", function () {
    describe("pushes transaction to _transactions array", function(){

      beforeEach(function() {
        statement.update("+", 500, 1000);
      });

      it("increases transactions array by 1", function () {
        expect(statement._transactions.length).toEqual(1);
      });

      it("adds amount of transaction", function() {
        expect(statement._transactions[0].amount).toEqual(500);
      });

      it("adds type of transaction", function() {
        expect(statement._transactions[0].type).toEqual("+");
      });
      
      it("adds balance of transaction", function() {
        expect(statement._transactions[0].balance).toEqual(1000);
      });
    });
    
    
    
  });

})