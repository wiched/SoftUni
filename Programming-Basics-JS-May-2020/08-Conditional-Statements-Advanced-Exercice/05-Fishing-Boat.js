function fishingBoat(budget, season, qty) {
  budget = +budget;
  qty = +qty;
  let rent = 0;
  if (season === 'Spring') {
    rent = 3000;
  } else if (season === 'Summer' || season === 'Autumn') {
    rent = 4200;
  } else if (season === 'Winter') {
    rent = 2600;
  }

  if (qty <= 6) {
    rent *= 0.9;
  } else if (qty >= 7 && qty <= 11) {
    rent *= 0.85;
  } else if (qty >= 12) {
    rent *= 0.75;
  }

  if (qty % 2 === 0 && season !== 'Autumn') {
    rent *= 0.95;
  }

  if (budget >= rent) {
    const diff = budget - rent;
    console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
  } else {
    const diff = rent - budget;
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
  }
}

fishingBoat('3000', 'Summer', '11');
fishingBoat('3600', 'Autumn', '6');
fishingBoat('2000', 'Winter', '13');
