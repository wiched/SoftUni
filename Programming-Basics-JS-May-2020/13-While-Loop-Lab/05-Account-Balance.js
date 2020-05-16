function accountBallance(params) {
  let total = 0;
  let currentNum = params.shift();
  while (currentNum != 'NoMoreMoney') {
    if (currentNum < 0) {
      console.log('Invalid operation!');
      break;
    }
    total += +currentNum;

    console.log(`Increase: ${Number(currentNum).toFixed(2)}`);
    currentNum = params.shift();
  }

  console.log(`Total: ${total.toFixed(2)}`);
}

// accountBallance(['5.51', '69.42', '100', 'NoMoreMoney']);
accountBallance(['120', '45.55', '-150']);
