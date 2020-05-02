function birthdayParty(rentPrice) {
  rentPrice = +rentPrice;
  const cakePrice = (rentPrice * 20) / 100;
  const beverages = (cakePrice * 55) / 100;
  const animator = rentPrice / 3;
  const sum = cakePrice + beverages + animator + rentPrice;
  console.log(sum);
}

birthdayParty('2250');
birthdayParty('3720');
