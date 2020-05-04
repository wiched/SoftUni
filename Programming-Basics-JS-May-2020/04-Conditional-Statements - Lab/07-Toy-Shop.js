function toyShop(vacationPrice, puzzlesQty, dollsQty, bearsQty, minionQty, trucksQty) {
  vacationPrice = +vacationPrice;
  puzzlesQty = +puzzlesQty;
  dollsQty = +dollsQty;
  bearsQty = +bearsQty;
  minionQty = +minionQty;
  trucksQty = +trucksQty;
  const totalProducts = puzzlesQty + dollsQty + bearsQty + minionQty + trucksQty;
  const moneyEarned =
    puzzlesQty * 2.6 + dollsQty * 3 + bearsQty * 4.1 + minionQty * 8.2 + trucksQty * 2;
  if (totalProducts >= 50) {
    const earnedAfterDiscount = moneyEarned - moneyEarned * 0.25;
    const earnedAfterRent = earnedAfterDiscount - earnedAfterDiscount * 0.1;
    if (earnedAfterRent >= vacationPrice) {
      const moneyLeft = earnedAfterRent - vacationPrice;
      console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else if (vacationPrice > earnedAfterRent) {
      const moneyNeeded = vacationPrice - earnedAfterRent;
      console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }
  } else if (totalProducts < 50) {
    const earnedAfterRent = moneyEarned - moneyEarned * 0.1;
    if (earnedAfterRent >= vacationPrice) {
      const moneyLeft = earnedAfterRent - vacationPrice;
      console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else if (vacationPrice > earnedAfterRent) {
      const moneyNeeded = vacationPrice - earnedAfterRent;
      console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }
  }
}

toyShop('40.8', '20', '25', '30', '50', '10');
toyShop('320', '8', '2', '5', '5', '1');
