function backToThePast(params) {
  let inheritedMoney = params.shift();
  const yearToLive = +params.shift();
  const startingYear = 1800;
  let ivanchoYears = 17;
  for (let i = startingYear; i <= yearToLive; i++) {
    ivanchoYears++;
    if (i % 2 === 0) {
      inheritedMoney -= 12000;
    } else {
      inheritedMoney -= 12000;
      inheritedMoney -= ivanchoYears * 50;
    }
  }
  if (inheritedMoney >= 0) {
    console.log(
      `Yes! He will live a carefree life and will have ${inheritedMoney.toFixed(
        2
      )} dollars left.`
    );
  } else {
    console.log(
      `He will need ${Math.abs(inheritedMoney).toFixed(2)} dollars to survive.`
    );
  }
}

backToThePast(['50000', '1802']);
backToThePast(['100000.15', '1808']);
