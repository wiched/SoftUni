function smallShop(product, city, qty) {
  qty = +qty;
  let price = 0;
  if (city === 'Sofia') {
    if (product === 'coffee') {
      price = qty * 0.5;
    } else if (product === 'water') {
      price = qty * 0.8;
    } else if (product === 'beer') {
      price = qty * 1.2;
    } else if (product === 'sweets') {
      price = qty * 1.45;
    } else if (product === 'peanuts') {
      price = qty * 1.6;
    }
  }

  if (city === 'Plovdiv') {
    if (product === 'coffee') {
      price = qty * 0.4;
    } else if (product === 'water') {
      price = qty * 0.7;
    } else if (product === 'beer') {
      price = qty * 1.15;
    } else if (product === 'sweets') {
      price = qty * 1.3;
    } else if (product === 'peanuts') {
      price = qty * 1.5;
    }
  }

  if (city === 'Varna') {
    if (product === 'coffee') {
      price = qty * 0.45;
    } else if (product === 'water') {
      price = qty * 0.7;
    } else if (product === 'beer') {
      price = qty * 1.1;
    } else if (product === 'sweets') {
      price = qty * 1.35;
    } else if (product === 'peanuts') {
      price = qty * 1.55;
    }
  }
  console.log(price);
}

smallShop('coffee', 'Varna', '2');
smallShop('peanuts', 'Plovdiv', '1');
smallShop('beer', 'Sofia', '6');
smallShop('water', 'Plovdiv', '3');
smallShop('sweets', 'Sofia', '2.23');
