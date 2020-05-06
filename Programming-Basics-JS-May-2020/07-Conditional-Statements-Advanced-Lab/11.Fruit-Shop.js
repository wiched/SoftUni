function fruitShop(fruit, day, qty) {
  qty = +qty;
  let price = 0;
  if (day === 'Saturday' || day === 'Sunday') {
    if (fruit === 'banana') {
      price = qty * 2.7;
    } else if (fruit === 'apple') {
      price = qty * 1.25;
    } else if (fruit === 'orange') {
      price = qty * 0.9;
    } else if (fruit === 'grapefruit') {
      price = qty * 1.6;
    } else if (fruit === 'kiwi') {
      price = qty * 3;
    } else if (fruit === 'pineapple') {
      price = qty * 5.6;
    } else if (fruit === 'grapes') {
      price = qty * 4.2;
    } else {
      console.log('error');
    }
  } else if (
    day === 'Monday' ||
    day === 'Tuesday' ||
    day === 'Wednesday' ||
    day === 'Thursday' ||
    day === 'Friday'
  ) {
    if (fruit === 'banana') {
      price = qty * 2.5;
    } else if (fruit === 'apple') {
      price = qty * 1.2;
    } else if (fruit === 'orange') {
      price = qty * 0.85;
    } else if (fruit === 'grapefruit') {
      price = qty * 1.45;
    } else if (fruit === 'kiwi') {
      price = qty * 2.7;
    } else if (fruit === 'pineapple') {
      price = qty * 5.5;
    } else if (fruit === 'grapes') {
      price = qty * 3.85;
    } else {
      console.log('error');
    }
  } else {
    console.log('error');
  }

  if (price > 0) {
    console.log(price.toFixed(2));
  }
}

fruitShop('apple', 'Tuesday', '2');
fruitShop('orange', 'Sunday', '3');
fruitShop('kiwi', 'Monday', '2.5');
fruitShop('grapes', 'Saturday', '0.5');
fruitShop('tomato', 'Monday', '0.5');
