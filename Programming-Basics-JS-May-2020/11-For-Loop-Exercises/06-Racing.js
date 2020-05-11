function racing(fuelLitres, expenditureLitres, rounds) {
  fuelLitres = +fuelLitres;
  expenditureLitres = +expenditureLitres;
  rounds = +rounds;
  let currentRound = 0;
  for (let i = 1; i <= rounds; i++) {
    if (fuelLitres < expenditureLitres) {
      break;
    }
    currentRound++;
    fuelLitres -= expenditureLitres;
  }

  if (currentRound === rounds) {
    console.log(`Congrats! You won the race!`);
  } else {
    console.log(`You are out of fuel in round ${currentRound}!`);
  }
}

racing('70', '6.5', '10');
racing('50', '4.3', '30');
