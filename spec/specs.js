describe("BankAccount", function(){
  it("adds an amount to the bank account when using the deposit method", function(){
    var test = Object.create(BankAccount);
     test.deposit(50);
    expect(test.balance).to.eql(50);
  });
});
