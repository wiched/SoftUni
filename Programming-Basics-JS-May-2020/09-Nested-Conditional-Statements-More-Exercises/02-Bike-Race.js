function bikeRace(junior, senior, trace) {
  junior = +junior;
  senior = +senior;
  let money = 0;
  const junAndSen = junior + senior;
  if (trace === 'trail') {
    money = junior * 5.5 + senior * 7;
  } else if (trace === 'cross-country') {
    if (junAndSen >= 50) {
      money = junior * 8 + senior * 9.5;
      money *= 0.75;
    } else {
      money = junior * 8 + senior * 9.5;
    }
  } else if (trace === 'downhill') {
    money = junior * 12.25 + senior * 13.75;
  } else if (trace === 'road') {
    money = junior * 20 + senior * 21.5;
  }
  money *= 0.95;
  console.log(money.toFixed(2));
}

bikeRace('10', '20', 'trail');
bikeRace('20', '25', 'cross-country');
bikeRace('30', '25', 'cross-country');
bikeRace('10', '10', 'downhill');
bikeRace('3', '40', 'road');
