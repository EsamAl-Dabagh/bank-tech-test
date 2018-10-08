describe("Account", function () {
  var account;

  beforeEach(function () {

    function StatementMock() {}

    StatementMock.prototype.update = function() {
      return "update called";
    }

    StatementMock.prototype.view = function() {
      var date = new Date();
      var today = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
      return `Date || Amount || Balance \n${today} || +£500 || £500`
    }

    account = new Account(StatementMock);

  });

  it("initializes with a balance of zero", function () {
    expect(account._balance).toEqual(0);
  });
  
  it("initializes with a new instance of Statement", function () {
    expect(account._statement).toBeTruthy();
  });

  describe("#addFunds", function() {
    it("increases the balance", function() {
      account.addFunds(100);

      expect(account._balance).toEqual(100);
    });
  });

  describe("#withdrawFunds", function() {

    it("decreases the balance", function() {
      account.addFunds(100);
      account.withdrawFunds(50);

      expect(account._balance).toEqual(50);
    });

    it("throws an error if insufficient funds", function() {
      expect(function() { 
        account.withdrawFunds(50) 
      }).toThrow(new Error("Insufficient funds"));
    });
  });

  describe("#showCurrentBalance", function() {
    it("displays the current balance", function() {
      account.addFunds(500);

      expect(account.showCurrentBalance()).toEqual("£500");
    }); 
  });

  describe("#viewStatement", function() {
    it("displays recent transactions", function() {
      account.addFunds(500);
      var date = new Date();
      var today = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`

      console.log(account._statement);

      expect(account.viewStatement()).toMatch(
        `Date || Amount || Balance \n${today} || +£500 || £500`
        );
    });
  });
});