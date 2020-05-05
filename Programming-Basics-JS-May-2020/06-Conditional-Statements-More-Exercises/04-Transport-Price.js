function transportPrice(km, dayTime) {
  km = +km;
  let price = 0;
  if (km < 20 && dayTime === 'day') {
    price = 0.7 + km * 0.79;
    console.log(price.toFixed(2));
  } else if (km < 20 && dayTime === 'night') {
    price = 0.7 + km * 0.9;
    console.log(price.toFixed(2));
  }
  if (km >= 20 && km < 100) {
    price = km * 0.09;
    console.log(price.toFixed(2));
  }
  if (km >= 100) {
    price = km * 0.06;
    console.log(price.toFixed(2));
  }
}

transportPrice('5', 'day');
transportPrice('7', 'night');
transportPrice('25', 'day');
transportPrice('180', 'night');
