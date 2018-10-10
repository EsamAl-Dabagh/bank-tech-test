(function (exports) {

  function Statement() {
    this._transactions = [];
  }

  Statement.prototype.update = function (amount, balance) {
    var dateObj = new Date();
    var dateString = `${dateObj.getDate()}/${dateObj.getMonth()}/${dateObj.getFullYear()}`
    this._transactions.push({
      date: dateString,
      amount: amount,
      balance: balance
    });
  }

  Statement.prototype.view = function () {
    var transactionStrings = [];
    var headers = "Date || Credit || Debit || Balance\n"

    this._transactions.reverse().forEach(function (item) {

      if (item.amount < 0) {
        transactionStrings.push(
          `${item.date} || || £${Math.abs(item.amount).toFixed(2)} || £${item.balance.toFixed(2)}`
        );
      } else {
        transactionStrings.push(
          `${item.date} || £${item.amount.toFixed(2)} || || £${item.balance.toFixed(2)}`
        );
      }
      
    });

    var statementString = headers + transactionStrings.join("\n");

    return statementString;

  }

  Statement.prototype.returnTransactions = function () {
    return this._transactions;
  }

  exports.Statement = Statement;
})(this)