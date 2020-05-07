function newHouse(type, qty, budget) {
  qty = Number(qty);
  budget = Number(budget);
  let price = 0;

  if (type === 'Roses') {
    if (qty > 80) {
      const regularPrice = qty * 5;
      price = regularPrice - regularPrice * 0.1;
    } else {
      price = qty * 5;
    }
  } else if (type == 'Dahlias') {
    if (qty > 90) {
      const regularPrice = qty * 3.8;
      price = regularPrice - regularPrice * 0.15;
    } else {
      price = qty * 3.8;
    }
  } else if (type == 'Tulips') {
    if (qty > 80) {
      const regularPrice = qty * 2.8;
      price = regularPrice - regularPrice * 0.15;
    } else {
      price = qty * 2.8;
    }
  } else if (type == 'Narcissus') {
    if (qty < 120) {
      const regularPrice = qty * 3;
      price = regularPrice + regularPrice * 0.15;
    } else {
      price = qty * 3;
    }
  } else if (type == 'Gladiolus') {
    if (qty < 80) {
      const regularPrice = qty * 2.5;
      price = regularPrice + regularPrice * 0.2;
    } else {
      price = qty * 2.5;
    }
  }

  if (budget >= price) {
    const diff = budget - price;
    console.log(
      `Hey, you have a great garden with ${qty} ${type} and ${diff.toFixed(2)} leva left.`
    );
  } else {
    const diff = price - budget;
    console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
  }
}

newHouse('Roses', '55', '250');
newHouse('Tulips', '88', '260');
newHouse('Narcissus', '119', '360');
