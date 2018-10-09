# Bank

### The Mission
Create a bank account that a user can deposit funds into and withdraw funds from. The user should also be able to view a statement of their transactions. 

### My Approach
* Start by breaking down the requirements into [user stories](#User-Stories).
* Highlight nouns and verbs in the user stories to build an idea of what classes and functions are required.
  * For this I decided to separate the Account class from the Statement class. This would ensure single-responsibility for each class and maximum flexibility to change in the future, if need be.
    * Statement is passed into the Account constructor as a default argument. This allows for flexibility without adding an extra step in for the user. 
    * An instance of Statement is then used as a private variable which allows functions in Account's prototype to call functions defined on Stateement's prototype. 
* Create a domain model to visually represent the relationship between classes and functions. 

> __Account__
> has: balance, statement
> ƒ deposit (amount) 
> ... executes _isValid()
> ... adds amount to balance.
> ... calls .update() on statement.
>
> ƒ withdrawFunds (amount)
> ... executes _isValid()
> ... executes _checkFunds()
> ... reduces balance by amount.
> ... calls .update() on statement.
>
> ƒ showCurrentBalance ()
> ... returns balance.
>
> ƒ viewStatement ()
> ... calls .view() on statment.
>
> ƒ _checkFunds (amount)
> ... throw error if insufficient funds.
>
> ƒ _isValid (amount)
> ... throw error if amount is 0 or less. 

>__Statement__ 
> has: transactions
> ƒ update (type, amount, balance)
> ... pushes hash of parameters into transactions along with today's date.
>
> ƒ view ()
> ... prints formatted transactions to the console. 

### User Stories

```
As a customer
So I can buy nice things
I want to be able to deposit funds into my account
```

```
As a customer
So I can pay for things in cash
I want to be able to withdraw funds from my account
```

```
As a customer
So I can't go overdrawn
I should not be able to withdraw more than I have in my account
```

```
As a customer
So I can see how much I have left
I want to be able to see my balance
```

```
As a customer
So I can keep track of my spending
I want to be able to see a statement of recent transactions
```

### How To Use

```
git clone https://github.com/EsamAl-Dabagh/bank-tech-test.git
cd bank-tech-test
```

Open `index.html` in your browser and open the dev-tools console.

##### Create a new account:

```
var myAccount = new Account();
```

##### Deposit money into the account:
  > ###### Takes an argument of amount
```
myAccount.deposit(500);
```

##### Check the balance:
```
myAccount.showCurrentBalance();
```

##### Withdraw money:
> ###### Takes an argument of amount
```
myAccount.withdraw(250);
```

##### View statement:
```
myAccount.viewStatement();
```

### Domain Model

```
╔════════════════════════╗                
║ ACCOUNT - constructor  ║                ╔══════════════════════════╗
║ ._balance              ║                ║ Statement - constructor  ║
║ ._statement            ║                ║ ._transactions           ║
╚════════════════════════╝                ╚══════════════════════════╝      
    |  |                                        |   |
╔══════════════════════╗                  ╔════════════════════════╗
║ ACCOUNT - prototype  ║                  ║ Statement - prototype  ║
║ .deposit()           ║----------------->║ .update()              ║
║ .withdrawFunds()     ║                  ║                        ║
║ .viewStatement()     ║----------------->║ .view()                ║
║ ._checkFunds()       ║                  ╚════════════════════════╝
║ ._isValid()          ║
╚══════════════════════╝
```

### Testing

Test-driven using Jasmine.
  * To run tests open `SpecRunner.html` in your browser.