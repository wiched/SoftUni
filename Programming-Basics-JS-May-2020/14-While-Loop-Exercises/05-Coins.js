function coins(params) {
  let amount = Number(params.shift()) * 100;
  let coins = 0;

  while (amount >= 200) {
    amount -= 200;
    coins += 1;
  }
  while (amount >= 100) {
    amount -= 100;
    coins += 1;
  }
  while (amount >= 50) {
    amount -= 50;
    coins += 1;
  }
  while (amount >= 20) {
    amount -= 20;
    coins += 1;
  }
  while (amount >= 10) {
    amount -= 10;
    coins += 1;
  }
  while (amount >= 5) {
    amount -= 5;
    coins += 1;
  }
  while (amount >= 2) {
    amount -= 2;
    coins += 1;
  }
  while (amount >= 1) {
    amount -= 1;
    coins += 1;
  }

  console.log(coins);
}

coins(['1.23']);
coins(['2']);
coins(['0.56']);
coins(['2.73']);
