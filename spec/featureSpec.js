describe("Features", function() {
  
  var acc;
  
  beforeEach(function() {
    acc = new Account();
  })
  
  it("has a balance", function() {
    expect(acc._balance).toEqual(0);
  });

  it("can add funds into account", function() {
    acc.addFunds(10);

    expect(acc._balance).toEqual(10);
  });

  it("can withdraw funds from account", function() {
    acc.addFunds(10);
    acc.withdrawFunds(5);

    expect(acc._balance).toEqual(5);
  });

  it("does not let customer withdraw funds they do not have", function() {
    expect(function() { 
      acc.withdrawFunds(10) 
    }).toThrow(new Error("Insufficient funds"));
  });

  it("can display balance", function() {
    acc.addFunds(500);

    expect(acc.showCurrentBalance()).toEqual("£500");
  });

  it("display statement", function() {
    acc.addFunds(500);
    acc.withdrawFunds(250);
    var date = new Date();
    var today = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`

    expect(acc.viewStatement()).toEqual(
      `Date || Amount || Balance\n${today} || +£500 || £500\n${today} || -£250 || £250`
      );
  });
});
