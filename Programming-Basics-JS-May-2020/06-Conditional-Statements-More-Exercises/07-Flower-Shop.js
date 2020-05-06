function flowerShop(magnoliasQty, hyacinthsQty, rosesQty, cactiQty, giftPrice) {
  magnoliasQty = +magnoliasQty * 3.25;
  hyacinthsQty = +hyacinthsQty * 4;
  rosesQty = +rosesQty * 3.5;
  cactiQty = +cactiQty * 8;
  giftPrice = +giftPrice;
  const revenue = (magnoliasQty + hyacinthsQty + rosesQty + cactiQty) * 0.95;
  if (revenue >= giftPrice) {
    const diff = revenue - giftPrice;
    console.log(`She is left with ${Math.floor(diff)} leva.`);
  } else {
    const diff = giftPrice - revenue;
    console.log(`She will have to borrow ${Math.ceil(diff)} leva.`);
  }
}

flowerShop('2', '3', '5', '1', '50');
flowerShop('15', '7', '5', '10', '100');
