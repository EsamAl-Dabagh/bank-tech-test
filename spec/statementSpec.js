describe("Statement", function () {

  var statement;

  beforeEach(function () {
    statement = new Statement();
  });

  it("initializes with empty transactions array", function () {
    expect(statement._transactions).toEqual([]);
  });

  describe("#update", function () {
    describe("pushes transaction to _transactions array", function () {

      beforeEach(function () {
        statement.update("+", 500, 1000);
      });

      it("increases transactions array by 1", function () {
        expect(statement._transactions.length).toEqual(1);
      });

      it("adds amount of transaction", function () {
        expect(statement._transactions[0].amount).toEqual(500);
      });

      it("adds type of transaction", function () {
        expect(statement._transactions[0].type).toEqual("+");
      });

      it("adds balance of transaction", function () {
        expect(statement._transactions[0].balance).toEqual(1000);
      });
    });

  });

  describe("#view", function() {
    beforeEach(function() {
      statement.update("+", 500, 1000);
      statement.update("-", 500, 500);
    });

    it("will display transactions in a readable format", function() {
      var dateObj = new Date();
      var dateString = `${dateObj.getDate()}/${dateObj.getMonth()}/${dateObj.getFullYear()}` 
      var outputString = `Date || Amount || Balance\n${dateString} || +£500 || £1000\n${dateString} || -£500 || £500`
      
      expect(statement.view()).toEqual(outputString);
    });
  });

});