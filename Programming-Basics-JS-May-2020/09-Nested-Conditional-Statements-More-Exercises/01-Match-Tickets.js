function matchTicket(budget, category, people) {
  budget = +budget;
  people = +people;
  let transportMoney = 0;
  if (people >= 1 && people <= 4) {
    transportMoney = budget * 0.25;
  } else if (people >= 5 && people <= 9) {
    transportMoney = budget * 0.4;
  } else if (people >= 10 && people <= 24) {
    transportMoney = budget * 0.5;
  } else if (people >= 25 && people <= 49) {
    transportMoney = budget * 0.6;
  } else if (people >= 50) {
    transportMoney = budget * 0.75;
  }

  if (category === 'VIP') {
    if (transportMoney >= 499.99 * people) {
      const moneyLeft = transportMoney - people * 499.99;
      console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else if (transportMoney < 499.99 * people) {
      const moneyNeeded = people * 499.99 - transportMoney;
      console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
    }
  } else if (category === 'Normal') {
    if (transportMoney >= 249.99 * people) {
      const moneyLeft = transportMoney - people * 249.99;
      console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else if (transportMoney < 249.99 * people) {
      const moneyNeeded = people * 249.99 - transportMoney;
      console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
    }
  }
}

matchTicket('1000', 'Normal', '1');
matchTicket('30000', 'VIP', '49');
