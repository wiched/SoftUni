function skiTrip(days, type, rating) {
  days = +days;
  let price = 0;
  if (days < 10) {
    if (type === 'room for one person') {
      price = (days - 1) * 18;
    } else if (type === 'apartment') {
      price = (days - 1) * 25 * 0.7;
    } else if (type === 'president apartment') {
      price = (days - 1) * 35 * 0.9;
    }
  } else if (days >= 10 && days < 15) {
    if (type === 'room for one person') {
      price = (days - 1) * 18;
    } else if (type === 'apartment') {
      price = (days - 1) * 25 * 0.65;
    } else if (type === 'president apartment') {
      price = (days - 1) * 35 * 0.85;
    }
  } else if (days >= 15) {
    if (type === 'room for one person') {
      price = (days - 1) * 18;
    } else if (type === 'apartment') {
      price = (days - 1) * 25 * 0.5;
    } else if (type === 'president apartment') {
      price = (days - 1) * 35 * 0.8;
    }
  }

  if (rating === 'positive') {
    price *= 1.25;
  } else if (rating === 'negative') {
    price *= 0.9;
  }

  console.log(price.toFixed(2));
}

skiTrip('14', 'apartment', 'positive');
skiTrip('30', 'president apartment', 'negative');
skiTrip('12', 'room for one person', 'positive');
skiTrip('2', 'apartment', 'positive');
