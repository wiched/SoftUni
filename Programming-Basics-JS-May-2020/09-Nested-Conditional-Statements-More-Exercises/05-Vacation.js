function vacation(budget, season) {
  budget = +budget;
  let location = '';
  let accomodationType = '';
  if (budget <= 1000) {
    accomodationType = 'Camp';
    if (season === 'Summer') {
      location = 'Alaska';
      budget *= 0.65;
    } else if (season === 'Winter') {
      location = 'Morocco';
      budget *= 0.45;
    }
  } else if (budget > 1000 && budget <= 3000) {
    accomodationType = 'Hut';
    if (season === 'Summer') {
      location = 'Alaska';
      budget *= 0.8;
    } else if (season === 'Winter') {
      location = 'Morocco';
      budget *= 0.6;
    }
  } else if (budget > 3000) {
    accomodationType = 'Hotel';
    budget *= 0.9;
    if (season === 'Summer') {
      location = 'Alaska';
    } else if (season === 'Winter') {
      location = 'Morocco';
    }
  }

  console.log(`${location} - ${accomodationType} - ${budget.toFixed(2)}`);
}

vacation('800', 'Summer');
vacation('799.50', 'Winter');
vacation('1100', 'Summer');
vacation('2543.99', 'Winter');
vacation('3460', 'Summer');
vacation('5000', 'Winter');
