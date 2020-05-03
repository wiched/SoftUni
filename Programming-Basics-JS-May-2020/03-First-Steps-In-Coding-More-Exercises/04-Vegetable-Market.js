function vegetableMarket(vegPrice, fruitPrice, vegQty, fruitQty) {
  vegPrice = +vegPrice;
  fruitPrice = +fruitPrice;
  vegQty = +vegQty;
  fruitQty = +fruitQty;
  const vegSum = vegPrice * vegQty;
  const fruitSum = fruitPrice * fruitQty;
  const sumToEuro = (vegSum + fruitSum) / 1.94;
  console.log(sumToEuro.toFixed(2));
}

vegetableMarket('0.194', '19.4', '10', '10');
vegetableMarket('1.5', '2.5', '10', '10');
