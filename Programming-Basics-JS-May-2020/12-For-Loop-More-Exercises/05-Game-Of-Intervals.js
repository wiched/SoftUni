function gameOfIntervals(params) {
  const turns = params.shift();
  let points = 0;
  let numBelow10 = 0;
  let numBelow20 = 0;
  let numBelow30 = 0;
  let numBelow40 = 0;
  let numBelow50 = 0;
  let invalidNumber = 0;

  for (let i = 0; i <= turns; i++) {
    const point = +params.shift();
    if (point >= 0 && point <= 9) {
      points += point * 0.2;
      numBelow10++;
    } else if (point >= 10 && point <= 19) {
      points += point * 0.3;
      numBelow20++;
    } else if (point >= 20 && point <= 29) {
      points += point * 0.4;
      numBelow30++;
    } else if (point >= 30 && point <= 39) {
      points += 50;
      numBelow40++;
    } else if (point >= 40 && point <= 50) {
      points += 100;
      numBelow50++;
    } else if (point < 0 || point > 50) {
      points /= 2;
      invalidNumber++;
    }
  }

  const numBelow10Percent = (numBelow10 / turns) * 100;
  const numBelow20Percent = (numBelow20 / turns) * 100;
  const numBelow30Percent = (numBelow30 / turns) * 100;
  const numBelow40Percent = (numBelow40 / turns) * 100;
  const numBelow50Percent = (numBelow50 / turns) * 100;
  const invalidNumberPercent = (invalidNumber / turns) * 100;
  console.log(points.toFixed(2));
  console.log(`From 0 to 9: ${numBelow10Percent.toFixed(2)}%`);
  console.log(`From 10 to 19: ${numBelow20Percent.toFixed(2)}%`);
  console.log(`From 20 to 29: ${numBelow30Percent.toFixed(2)}%`);
  console.log(`From 30 to 39: ${numBelow40Percent.toFixed(2)}%`);
  console.log(`From 40 to 50: ${numBelow50Percent.toFixed(2)}%`);
  console.log(`Invalid numbers: ${invalidNumberPercent.toFixed(2)}%`);
}

gameOfIntervals(['10', '43', '57', '-12', '23', '12', '0', '50', '40', '30', '20']);
