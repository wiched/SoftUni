function vacation(params) {
  const neededMoney = Number(params.shift());
  let savedMoney = Number(params.shift());

  let days = 0;
  let daysSpend = 0;
  while (savedMoney < neededMoney) {
    const command = params.shift();
    const money = +params.shift();
    days++;

    if (command === 'spend') {
      daysSpend++;
      if (savedMoney < money) {
        savedMoney = 0;
      } else {
        savedMoney -= money;
      }
    } else if (command === 'save') {
      savedMoney += money;
      daysSpend = 0;
    }
    if (daysSpend >= 5) {
      console.log(`You can't save the money.`);
      console.log(`${days}`);
      break;
    }
  }

  if (savedMoney >= neededMoney) {
    console.log(`You saved the money for ${days} days.`);
  }
}

vacation(['2000', '1000', 'spend', '1200', 'save', '2000']);
vacation(['110', '60', 'spend', '10', 'spend', '10', 'spend', '10', 'spend', '10', 'spend', '10']);
vacation(['250', '150', 'spend', '50', 'spend', '50', 'save', '100', 'save', '100']);
