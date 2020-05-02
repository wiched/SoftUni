function petShop(dogsNum, otherAnimalsNum) {
  const dogsPriceSum = dogsNum * 2.5;
  const otherAnimalsSum = otherAnimalsNum * 4;
  const sum = dogsPriceSum + otherAnimalsSum;
  console.log(`${sum} lv.`);
}

petShop('5', '4');
petShop('13', '9');
