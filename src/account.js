(function(exports) {

  function Account(statement = Statement) {
    this._balance = 0;
    this._statement = new statement();
  }

  Account.prototype.addFunds = function(amount) {
    this._balance += amount;
    this._statement.update("+", amount, this._balance);
  }

  Account.prototype.withdrawFunds = function(amount) {
    if (this._balance - amount < 0) throw new Error("Insufficient funds");
    this._balance -= amount;
  }

  Account.prototype.showCurrentBalance = function() {
    return `£${this._balance}`;
  }

  Account.prototype.viewStatement = function() {
    return this._statement.view();
  }

  exports.Account = Account;
})(this)