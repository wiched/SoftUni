function fuelTank(fuel, litres) {
  litres = +litres;
  if (fuel === 'Diesel' || fuel === 'Gasoline' || fuel === 'Gas') {
    if (litres >= 25) {
      console.log(`You have enough ${fuel.toLowerCase()}.`);
    } else {
      console.log(`Fill your tank with ${fuel.toLowerCase()}!`);
    }
  } else {
    console.log(`Invalid fuel!`);
  }
}

fuelTank('Diesel', '10');
fuelTank('Gasoline', '40');
fuelTank('Gas', '25');
fuelTank('Kerosene', '200');
