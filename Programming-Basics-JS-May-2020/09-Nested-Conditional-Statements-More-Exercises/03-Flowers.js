function flowers(chrysanthemums, roses, tulips, season, holiday) {
  chrysanthemums = +chrysanthemums;
  roses = +roses;
  tulips = +tulips;
  let price = 0;
  const allFlower = chrysanthemums + roses + tulips;
  if (season === 'Spring' || season === 'Summer') {
    price += chrysanthemums * 2;
    price += roses * 4.1;
    price += tulips * 2.5;
  } else if (season === 'Autumn' || season === 'Winter') {
    price += chrysanthemums * 3.75;
    price += roses * 4.5;
    price += tulips * 4.15;
  }

  if (holiday === 'Y') {
    price *= 1.15;
  }

  if (season === 'Spring' && tulips > 7) {
    price *= 0.95;
  }
  if (season === 'Winter' && roses >= 10) {
    price *= 0.9;
  }
  if (allFlower > 20) {
    price *= 0.8;
  }
  price += 2;
  console.log(price.toFixed(2));
}

flowers('2', '4', '8', 'Spring', 'Y');
flowers('3', '10', '9', 'Winter', 'N');
flowers('10', '10', '10', 'Autumn', 'N');
