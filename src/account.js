(function (exports) {

  function Account(statement = Statement) {
    this._balance = 0;
    this._statement = new statement();
    this.DEPOSIT = "+";
    this.WITHDRAWAL = "-";
  }

  Account.prototype.deposit = function (amount) {
    this._isValid(amount);
    this._balance += amount;
    this._statement.update(this.DEPOSIT, amount, this._balance);
  }

  Account.prototype.withdrawFunds = function (amount) {
    this._isValid(amount);
    this._checkFunds(amount);
    this._balance -= amount;
    this._statement.update(this.WITHDRAWAL, amount, this._balance);
  }

  Account.prototype.showCurrentBalance = function () {
    return `£${this._balance.toFixed(2)}`;
  }

  Account.prototype.viewStatement = function () {
    return this._statement.view();
  }

  Account.prototype._checkFunds = function (amount) {
    if (this._balance - amount < 0) throw new Error("Insufficient funds");
  }

  Account.prototype._isValid = function (amount) {
    if (amount <= 0) throw new Error("Please enter something greater than 0");
  }

  exports.Account = Account;
})(this)