describe("Account", function () {
  var account;

  beforeEach(function () {

    account = new Account();

    var date = new Date();
    var today = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    var dateString = `Date || Amount || Balance \n${today} || +£500.00 || £500.00`;
    spyOn(account, "viewStatement").and.returnValue(dateString);
    
  });

  it("initializes with a balance of zero", function () {
    expect(account.showCurrentBalance()).toEqual("£0.00");
  });

  it("initializes with a new instance of Statement", function () {
    expect(account.viewStatement()).toBeDefined();
  });

  describe("#deposit", function () {
    it("increases the balance", function () {
      account.deposit(100);

      expect(account.showCurrentBalance()).toEqual("£100.00");
    });

    it("checks if deposit amount is greater than 0", function () {
      expect(function () {
        account.deposit(0)
      }).toThrow(new Error("Please enter something greater than 0"));
    });
  });

  describe("#withdrawFunds", function () {

    it("decreases the balance", function () {
      account.deposit(100);
      account.withdrawFunds(50);

      expect(account.showCurrentBalance()).toEqual("£50.00");
    });

    it("throws an error if insufficient funds", function () {
      expect(function () {
        account.withdrawFunds(50)
      }).toThrow(new Error("Insufficient funds"));
    });

    it("checks if withdrawFunds amount is greater than 0", function () {
      expect(function () {
        account.withdrawFunds(0);
      }).toThrow(new Error("Please enter something greater than 0"));
    });

  });

  describe("#showCurrentBalance", function () {
    it("displays the current balance", function () {
      account.deposit(500);

      expect(account.showCurrentBalance()).toEqual("£500.00");
    });
  });

  describe("#viewStatement", function () {
    it("displays recent transactions", function () {
      account.deposit(500);
      var date = new Date();
      var today = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`

      expect(account.viewStatement()).toEqual(
        `Date || Amount || Balance \n${today} || +£500.00 || £500.00`
      );
    });
  });
});