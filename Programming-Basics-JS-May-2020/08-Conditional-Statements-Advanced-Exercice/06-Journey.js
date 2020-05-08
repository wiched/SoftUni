function journey(budget, season) {
  budget = +budget;
  let destination;
  let type;
  let price;
  if (budget <= 100) {
    destination = 'Bulgaria';
    if (season === 'summer') {
      type = 'Camp';
      price = budget - budget * 0.7;
    } else if (season === 'winter') {
      type = 'Hotel';
      price = budget - budget * 0.3;
    }
  } else if (budget <= 1000) {
    destination = 'Balkans';
    if (season === 'summer') {
      type = 'Camp';
      price = budget - budget * 0.6;
    } else if (season === 'winter') {
      type = 'Hotel';
      price = budget - budget * 0.2;
    }
  } else if (budget > 1000) {
    destination = 'Europe';
    type = 'Hotel';
    price = budget - budget * 0.1;
  }

  console.log(`Somewhere in ${destination}`);
  console.log(`${type} - ${price.toFixed(2)}`);
}

journey('50', 'summer');
journey('75', 'winter');
journey('312', 'summer');
journey('678.53', 'winter');
journey('1500', 'summer');
