describe("Features", function() {
  it("has a balance", function() {
    var acc = new Account()

    expect(acc._balance).toEqual(0);
  });

  it("can add funds into account", function() {
    var acc = new Account();
    acc.addFunds(10);

    expect(acc._balance).toEqual(10);
  });

  it("can withdraw funds from account", function() {
    var acc = new Account();
    acc.addFunds(10);
    acc.withdrawFunds(5);

    expect(acc._balance).toEqual(5);
  });
});