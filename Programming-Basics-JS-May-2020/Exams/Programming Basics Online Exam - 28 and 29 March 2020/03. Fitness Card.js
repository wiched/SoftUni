function fitnessCard(params) {
  const savings = +params.shift();
  const sex = params.shift();
  const age = +params.shift();
  const sport = params.shift();
  let cardCost = 0;
  if (sex === 'm') {
    if (sport === 'Gym') {
      cardCost = 42;
    } else if (sport === 'Boxing') {
      cardCost = 41;
    } else if (sport === 'Yoga') {
      cardCost = 45;
    } else if (sport === 'Zumba') {
      cardCost = 34;
    } else if (sport === 'Dances') {
      cardCost = 51;
    } else if (sport === 'Pilates') {
      cardCost = 39;
    }
  } else if (sex === 'f') {
    if (sport === 'Gym') {
      cardCost = 35;
    } else if (sport === 'Boxing') {
      cardCost = 37;
    } else if (sport === 'Yoga') {
      cardCost = 42;
    } else if (sport === 'Zumba') {
      cardCost = 31;
    } else if (sport === 'Dances') {
      cardCost = 53;
    } else if (sport === 'Pilates') {
      cardCost = 37;
    }
  }

  if (age <= 19) {
    cardCost *= 0.8;
  }

  if (savings >= cardCost) {
    console.log(`You purchased a 1 month pass for ${sport}.`);
  } else {
    const money = cardCost - savings;
    console.log(
      `You don't have enough money! You need $${money.toFixed(2)} more.`
    );
  }
}

fitnessCard(['50', 'm', '23', 'Gym']);
fitnessCard(['20', 'f', '15', 'Yoga']);
fitnessCard(['10', 'm', '50', 'Pilates']);
