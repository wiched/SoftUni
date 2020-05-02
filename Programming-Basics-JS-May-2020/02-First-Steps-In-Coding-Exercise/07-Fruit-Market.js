/* eslint-disable */
function fruitMarket(
  strawberryPrice,
  bananasQty,
  orangesQty,
  raspberriesQty,
  strawberriesQty
) {
  strawberryPrice = +strawberryPrice;
  bananasQty = +bananasQty;
  orangesQty = +orangesQty;
  raspberriesQty = +raspberriesQty;
  strawberriesQty + strawberriesQty;
  raspberriesPrice = strawberryPrice / 2;
  orangesPrice = raspberriesPrice - (0.4 * raspberriesPrice);
  bananasPrice = raspberriesPrice - (0.8 * raspberriesPrice);
  const raspberriesSum = raspberriesQty * raspberriesPrice;
  const orangesSum = orangesQty * orangesPrice;
  const bananasSum = bananasQty * bananasPrice;
  const strawberriesSum = strawberriesQty * strawberryPrice
  const fruitTotal = raspberriesSum + orangesSum + bananasSum + strawberriesSum
  console.log(fruitTotal);
}

fruitMarket('48', '10', '3.3', '6.5', '1.7');
