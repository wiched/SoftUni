function fuelTank(fuel, qty, card) {
  qty = +qty;
  let price = 0;
  if (fuel === 'Gas') {
    if (card === 'Yes') {
      price = qty * (0.93 - 0.08);
    } else {
      price = qty * 0.93;
    }
    if (qty >= 20 && qty <= 25) {
      price *= 0.92;
    } else if (qty >= 26) {
      price *= 0.9;
    }
  }

  if (fuel === 'Gasoline') {
    if (card === 'Yes') {
      price = qty * (2.22 - 0.18);
    } else {
      price = qty * 2.22;
    }
    if (qty >= 20 && qty <= 25) {
      price *= 0.92;
    } else if (qty >= 26) {
      price *= 0.9;
    }
  }

  if (fuel === 'Diesel') {
    if (card === 'Yes') {
      price = qty * (2.33 - 0.12);
    } else {
      price = qty * 2.33;
    }
    if (qty >= 20 && qty <= 25) {
      price *= 0.92;
    } else if (qty >= 26) {
      price *= 0.9;
    }
  }
  console.log(`${price.toFixed(2)} lv.`);
}

fuelTank('Gas', '30', 'Yes');
fuelTank('Gasoline', '25', 'No');
fuelTank('Diesel', '19', 'No');
