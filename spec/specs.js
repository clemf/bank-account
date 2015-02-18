describe("BankAccount", function(){
  it("adds an amount to the bank account when using the deposit method", function(){
    var test = Object.create(BankAccount);
     test.deposit(50);
    expect(test.balance).to.eql(50);
  });
  it("removes an amount from the bank account when using the withdrawal method", function(){
    var test = Object.create(BankAccount);
    test.withdraw(50);
    expect(test.balance).to.eql(-50);
  });
  it("takes parameters of name and initial deposit when creating account", function(){
    var test = Object.create(BankAccount);
    test.initialize("name", 100);
    expect(test.name).to.eql("name");
    expect(test.balance).to.eql(100);
  });
});
