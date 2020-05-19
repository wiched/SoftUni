function tournamentOfChristmas(params) {
  const days = params.shift();
  let totalMoney = 0;
  let daysWon = 0;
  let daysLoosed = 0;

  for (let i = 1; i <= days; i++) {
    let game = params.shift();
    let dailyMoney = 0;
    let wins = 0;
    let loses = 0;

    while (game !== 'Finish') {
      const result = params.shift();
      if (result === 'win') {
        dailyMoney += 20;
        wins++;
      } else {
        loses++;
      }
      game = params.shift();
    }
    if (wins > loses) {
      dailyMoney *= 1.1;
      daysWon++;
    } else {
      daysLoosed++;
    }
    totalMoney += dailyMoney;
  }

  if (daysWon > daysLoosed) {
    totalMoney *= 1.2;
    console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
  } else {
    console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
  }
}

tournamentOfChristmas([
  '2',
  'volleyball',
  'win',
  'football',
  'lose',
  'basketball',
  'win',
  'Finish',
  'golf',
  'win',
  'tennis',
  'win',
  'badminton',
  'win',
  'Finish',
]);
tournamentOfChristmas([
  '3',
  'darts',
  'lose',
  'handball',
  'lose',
  'judo',
  'win',
  'Finish',
  'snooker',
  'lose',
  'swimming',
  'lose',
  'squash',
  'lose',
  'table tennis',
  'win',
  'Finish',
  'volleyball',
  'win',
  'basketball',
  'win',
  'Finish',
]);
