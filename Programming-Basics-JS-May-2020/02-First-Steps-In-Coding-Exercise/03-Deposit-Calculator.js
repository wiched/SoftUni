function depositCalculator(depositSum, term, interestRate) {
  depositSum = +depositSum;
  term = +term;
  interestRate = +interestRate;
  const interestAccrued = (depositSum * interestRate) / 100;
  const monthlyInterest = interestAccrued / 12;
  const sum = depositSum + term * monthlyInterest;
  console.log(sum);
}

depositCalculator('200', '3', '5.7');
depositCalculator('2350', '6', '7');
