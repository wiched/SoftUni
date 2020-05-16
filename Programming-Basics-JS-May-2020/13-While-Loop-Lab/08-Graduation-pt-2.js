function graduation(params) {
  const name = params.shift();
  let currentGrade = +params.shift();
  let counter = 0;
  let gradesSum = 0;
  let fail = 0;

  while (counter < 12) {
    counter++;

    if (currentGrade == 2) {
      fail++;
    }

    if (fail >= 1 || currentGrade < 4) {
      console.log(`${name} has been excluded at ${counter} grade`);
      break;
    }

    gradesSum += +currentGrade;
    currentGrade = params.shift();
  }

  if (counter == 12) {
    const average = gradesSum / 12;
    console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
  }
}

graduation(['Gosho', '5', '5.5', '6', '5.43', '5.5', '6', '5.55', '5', '6', '6', '5.43', '5']);
graduation(['Mimi', '5', '6', '5', '6', '5', '6', '6', '2', '3']);
