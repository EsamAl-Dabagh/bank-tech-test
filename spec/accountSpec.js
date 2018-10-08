describe("Account", function () {
  var account;

  beforeEach(function () {
    account = new Account();
  })

  it("initializes with a balance of zero", function () {
    expect(account._balance).toEqual(0);
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
});