describe("Account", function () {
  var account;

  function StatementMock() {}

  StatementMock.prototype.update = function () {
    return "update called";
  }

  StatementMock.prototype.view = function () {
    var date = new Date();
    var today = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    return `Date || Amount || Balance \n${today} || +£500 || £500`
  }

  beforeEach(function () {
    account = new Account(StatementMock);
  });

  it("initializes with a balance of zero", function () {
    expect(account._balance).toEqual(0);
  });

  it("initializes with a new instance of Statement", function () {
    expect(account._statement).toBeTruthy();
  });

  describe("#deposit", function () {
    it("increases the balance", function () {
      account.deposit(100);

      expect(account._balance).toEqual(100);
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

      expect(account._balance).toEqual(50);
    });

    it("throws an error if insufficient funds", function () {
      expect(function () {
        account.withdrawFunds(50)
      }).toThrow(new Error("Insufficient funds"));
    });
  });

  it("checks if withdrawFunds amount is greater than 0", function () {
    expect(function () {
      account.withdrawFunds(0);
    }).toThrow(new Error("Please enter something greater than 0"));
  });

  describe("#showCurrentBalance", function () {
    it("displays the current balance", function () {
      account.deposit(500);

      expect(account.showCurrentBalance()).toEqual("£500");
    });
  });

  describe("#viewStatement", function () {
    it("displays recent transactions", function () {
      account.deposit(500);
      var date = new Date();
      var today = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`

      expect(account.viewStatement()).toEqual(
        `Date || Amount || Balance \n${today} || +£500 || £500`
      );
    });
  });
});