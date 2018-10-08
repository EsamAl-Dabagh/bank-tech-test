(function(exports) {

  function Account() {
    this._balance = 0;
  }

  Account.prototype.addFunds = function(amount) {
    this._balance += amount;
  }

  Account.prototype.withdrawFunds = function(amount) {
    if (this._balance - amount < 0) throw new Error("Insufficient funds");
    this._balance -= amount;
  }

  Account.prototype.showCurrentBalance = function() {
    return `£${this._balance}`;
  }

  exports.Account = Account;
})(this)