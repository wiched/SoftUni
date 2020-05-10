function carToGo(budget, season) {
  budget = +budget;
  let carClass = '';
  let carType = '';
  if (budget <= 100) {
    carClass = 'Economy class';
    if (season === 'Summer') {
      carType = 'Cabrio';
      budget *= 0.35;
    } else if (season === 'Winter') {
      carType = 'Jeep';
      budget *= 0.65;
    }
  } else if (budget > 100 && budget <= 500) {
    carClass = 'Compact class';
    if (season === 'Summer') {
      carType = 'Cabrio';
      budget *= 0.45;
    } else if (season === 'Winter') {
      carType = 'Jeep';
      budget *= 0.8;
    }
  } else if (budget > 500) {
    carClass = 'Luxury class';
    carType = 'Jeep';
    budget *= 0.9;
  }

  console.log(`${carClass}`);
  console.log(`${carType} - ${budget.toFixed(2)}`);
}

carToGo('450', 'Summer');
carToGo('450', 'Winter');
carToGo('99.99', 'Summer');
carToGo('70.50', 'Winter');
carToGo('1010', 'Summer');
carToGo('1010', 'Winter');
