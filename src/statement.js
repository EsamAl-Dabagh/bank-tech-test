(function(exports) {

  function Statement() {
    this._transactions = [];
  }

  Statement.prototype.update = function(type, amount, balance) {
    var dateObj = new Date();
    var dateString = `${dateObj.getDate()}/${dateObj.getMonth()}/${dateObj.getFullYear()}}` 
    this._transactions.push({
      date: dateString,
      type: type,
      amount: amount,
      balance: balance
    });
  }

  exports.Statement = Statement;
})(this)