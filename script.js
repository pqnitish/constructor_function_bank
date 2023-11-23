function BankAccount(AccountNumber, name, type, balance) {
  this.AccountNumber = AccountNumber;
  this.name = name;
  this.type = type;
  this.balance = balance;
  this.active = true;

  // deposit method
  this.deposit = function (amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited amount:${amount}.New balance: ${this.balance}`);
    } else {
      console.log("Ivalid deposit amount");
    }
  };
  // withdrawal method
  this.withdrawn = function (amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn ${amount}. New balance: ${this.balance}`);
    } else {
      console.log("insufficient funds.");
    }
  };
  // checkBalance method
  this.checkBalance = function () {
    console.log(`Account blance for ${this.name}: ${this.balance}`);
  };
  //IsActive method
  this.isActive = function () {
    return this.active;
  };
}

//Function to calculate total balance of all active accounts
function getTotalBalance(accounts) {
  let totalBalance = 0;
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].isActive()) {
      totalBalance += accounts[i].balance;
    }
  }
  return totalBalance;
}
// Create multiple BankAccount objects
const account1 = new BankAccount(124, "Nitish", "saving", 12000);
const account2 = new BankAccount(125, "Rahul", "current", 15000);
const account3 = new BankAccount(128, "Ritesh", "saving", 18000);
account1.deposit(200);
account1.withdrawn(50);
account1.checkBalance();

account2.deposit(100);
account2.withdrawn(200);
account2.checkBalance();

account3.deposit(500);
account3.withdrawn(5000);
account3.checkBalance();

const activeAcconts = [account1, account2, account3];
const totalBal = getTotalBalance(activeAcconts);
console.log(`Total balance of all active accounts: ${totalBal}`);
