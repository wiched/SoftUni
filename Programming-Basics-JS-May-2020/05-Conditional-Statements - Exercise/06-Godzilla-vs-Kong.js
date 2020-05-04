function godzillaVsKong(movieBudget, numExtras, extraClothingPrice) {
  movieBudget = +movieBudget;
  numExtras = +numExtras;
  extraClothingPrice = +extraClothingPrice;
  let clothesPrice = numExtras * extraClothingPrice;
  const decor = movieBudget - movieBudget * 0.9;
  if (numExtras >= 150) {
    clothesPrice -= clothesPrice * 0.1;
  }
  const moneyNeeded = decor + clothesPrice;
  if (movieBudget >= moneyNeeded) {
    const moneyLeft = movieBudget - moneyNeeded;
    console.log('Action!');
    console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
  } else if (moneyNeeded > movieBudget) {
    const moneyStillNeeded = moneyNeeded - movieBudget;

    console.log('Not enough money!');
    console.log(`Wingard needs ${moneyStillNeeded.toFixed(2)} leva more.`);
  }
}

godzillaVsKong('20000', '120', '55.5');
godzillaVsKong('15437.62', '186', '57.99');
godzillaVsKong('9587.88', '222', '55.68');
