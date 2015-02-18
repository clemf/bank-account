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

$(document).ready(function() {
  var account = Object.create(BankAccount);

  $("form#sign-up").submit(function(event) {
    var name = $("input#name").val();
    var initial = parseFloat($("input#initial").val());

    account.initialize(name, initial);
    $("#balance").text(account.balance);

    event.preventDefault();
  });

  $("form#transaction").submit(function(event){
    var deposit = parseFloat($("input#deposit").val());
    var withdraw = parseFloat($("input#withdraw").val());

    if (!(isNaN(deposit))){
      account.deposit(deposit);
    }

    if(!(isNaN(withdraw))){
      account.withdraw(withdraw);
    }

    $("form#transaction").trigger("reset");
    
    $("#balance").text(account.balance);
      event.preventDefault();
  });
});
