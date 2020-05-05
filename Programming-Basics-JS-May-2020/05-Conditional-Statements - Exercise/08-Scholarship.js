function scholarship(incomeLv, gpa, minWage) {
  incomeLv = +incomeLv;
  gpa = +gpa;
  minWage = +minWage;

  let socialMoney = 0;
  let resultsMoney = 0;

  if (incomeLv < minWage && gpa > 4.5) {
    socialMoney = minWage * 0.35;
  }

  if (gpa >= 5.5) {
    resultsMoney = gpa * 25;
  }

  if (socialMoney === 0 && resultsMoney === 0) {
    console.log(`You cannot get a scholarship!`);
  } else if (socialMoney > resultsMoney) {
    console.log(`You get a Social scholarship ${Math.trunc(socialMoney)} BGN`);
  } else {
    console.log(
      `You get a scholarship for excellent results ${Math.trunc(resultsMoney)} BGN`
    );
  }
}

scholarship('480.00', '4.60', '450.00');
scholarship('300.00', '5.65', '420.00');
