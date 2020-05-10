function truckDriver(season, km) {
  km = +km;
  let money = 0;
  if (km <= 5000) {
    if (season === 'Spring' || season === 'Autumn') {
      money = km * 0.75;
    } else if (season === 'Summer') {
      money = km * 0.9;
    } else if (season === 'Winter') {
      money = km * 1.05;
    }
  } else if (km > 5000 && km <= 10000) {
    if (season === 'Spring' || season === 'Autumn') {
      money = km * 0.95;
    } else if (season === 'Summer') {
      money = km * 1.1;
    } else if (season === 'Winter') {
      money = km * 1.25;
    }
  } else if (km > 10000 && km <= 20000) {
    money = km * 1.45;
  }
  money *= 0.9;
  money *= 4;
  console.log(`${money.toFixed(2)}`);
}

truckDriver('Summer', '3455');
truckDriver('Winter', '4350');
truckDriver('Winter', '5678');
truckDriver('Winter', '16042');
truckDriver('Spring', '1600');
truckDriver('Autumn', '8600');
truckDriver('Spring', '16942');
