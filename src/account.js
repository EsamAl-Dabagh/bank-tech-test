(function(exports) {

  function Account() {
    this._balance = 0;
  }

  Account.prototype.addFunds = function(amount) {
    this._balance += amount;
  }

  Account.prototype.withdrawFunds = function(amount) {
    this._balance -= amount;
  }

  exports.Account = Account;
})(this)