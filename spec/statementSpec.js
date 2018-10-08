describe("Statement", function() {

  var statement;

  beforeEach(function() {
    statement = new Statement();
  });
  
  it("initializes with empty transactions array", function() {
    expect(statement._transactions).toEqual([]);
  });

})