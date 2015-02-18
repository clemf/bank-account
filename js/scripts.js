var BankAccount = {
  balance: 0,
  name: "",
  initialize: function(name, initial){
    this.name = name;
    this.balance = initial;
  },
  deposit: function(amount){
    this.balance += amount;
  },
  withdraw: function(amount){
    this.balance -= amount;
  }
};
