function sumOfTwoNumbers(params) {
  const start = +params.shift();
  const end = +params.shift();
  const magic = +params.shift();
  let combination = 0;
  let flag = false;
  let firstNumber = 0;
  let secondNumber = 0;

  for (let i = start; i <= end; i++) {
    firstNumber = i;
    for (let j = start; j <= end; j++) {
      secondNumber = j;
      const sum = firstNumber + secondNumber;
      combination++;
      if (sum == magic) {
        flag = true;
        break;
      }
    }
    if (flag) {
      break;
    }
  }

  if (flag) {
    const sum = firstNumber + secondNumber;
    console.log(
      `Combination N:${combination} (${firstNumber} + ${secondNumber} = ${sum})`
    );
  } else {
    console.log(`${combination} combinations - neither equals ${magic}`);
  }
}

sumOfTwoNumbers(['1', '10', '5']);
sumOfTwoNumbers(['23', '24', '20']);
// sumOfTwoNumbers(['88', '888', '1000']);
// sumOfTwoNumbers(['88', '888', '2000']);
