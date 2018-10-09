describe("Features", function() {
  
  var acc;
  
  beforeEach(function() {
    acc = new Account();
  })
  
  it("has a balance", function() {
    expect(acc._balance).toEqual(0);
  });

  it("can add funds into account", function() {
    acc.deposit(10);

    expect(acc._balance).toEqual(10);
  });

  it("can withdraw funds from account", function() {
    acc.deposit(10);
    acc.withdrawFunds(5);

    expect(acc._balance).toEqual(5);
  });

  it("does not let customer withdraw funds they do not have", function() {
    expect(function() { 
      acc.withdrawFunds(10) 
    }).toThrow(new Error("Insufficient funds"));
  });

  it("checks deposit amount is greater than 0", function() {
    expect(function() {
      acc.deposit(-5)
    }).toThrow(new Error("Please enter something greater than 0"));
  });
  
  it("checks withdraw amount is greater than 0", function() {
    expect(function() {
      acc.withdrawFunds(-5)
    }).toThrow(new Error("Please enter something greater than 0"));
  });

  it("can display balance", function() {
    acc.deposit(500);

    expect(acc.showCurrentBalance()).toEqual("£500.00");
  });

  it("display statement", function() {
    acc.deposit(500);
    acc.withdrawFunds(250);
    var date = new Date();
    var today = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`

    expect(acc.viewStatement()).toEqual(
      `Date || Amount || Balance\n${today} || -£250.00 || £250.00\n${today} || +£500.00 || £500.00`
      );
  });
});
