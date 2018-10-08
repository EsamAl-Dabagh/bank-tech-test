describe("Account", function () {
  var account;

  beforeEach(function () {
    account = new Account();
  })

  it("initializes with a balance of zero", function () {
    expect(account._balance).toEqual(0);
  });
});