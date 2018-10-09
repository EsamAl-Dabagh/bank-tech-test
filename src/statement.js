(function (exports) {

  function Statement() {
    this._transactions = [];
  }

  Statement.prototype.update = function (type, amount, balance) {
    var dateObj = new Date();
    var dateString = `${dateObj.getDate()}/${dateObj.getMonth()}/${dateObj.getFullYear()}`
    this._transactions.push({
      date: dateString,
      type: type,
      amount: amount,
      balance: balance
    });
  }

  Statement.prototype.view = function () {
    var transactionStrings = [];
    var headers = "Date || Amount || Balance\n"

    this._transactions.reverse().forEach(function (item) {
      transactionStrings.push(
        `${item.date} || ${item.type}£${item.amount.toFixed(2)} || £${item.balance.toFixed(2)}`
      );
    });

    var statementString = headers + transactionStrings.join("\n");

    return statementString;

  }

  exports.Statement = Statement;
})(this)