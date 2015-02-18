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
});
