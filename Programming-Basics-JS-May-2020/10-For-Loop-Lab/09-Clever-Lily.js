function cleverLily(args) {
  n = args.shift();
  washer = args.shift();
  toy = args.shift();

  let toysNumber = 0;
  let earnedMoney = 0;
  let brotherMoney = 0;
  let birthdayCash = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      birthdayCash += 10;
      brotherMoney += 1;
      earnedMoney += birthdayCash;
    } else {
      toysNumber += 1;
    }
  }
  const cashPlusToys = earnedMoney + toysNumber * toy;
  const finalMoney = cashPlusToys - brotherMoney;

  if (finalMoney >= washer) {
    const diff = finalMoney - washer;
    console.log(`Yes! ${diff.toFixed(2)}`);
  } else if (washer > finalMoney) {
    const diff = washer - finalMoney;
    console.log(`No! ${diff.toFixed(2)}`);
  }
}

cleverLily(['10', '170.00', '6']);
cleverLily(['21', '1570.98', '3']);
