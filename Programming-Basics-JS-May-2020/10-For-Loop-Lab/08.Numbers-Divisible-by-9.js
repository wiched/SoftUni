function numsDivisibleBy9(num1, num2) {
  num1 = +num1;
  num2 = +num2;
  let sum = 0;
  let sentence = '';
  for (let i = num1; i <= num2; i++) {
    if (i % 9 === 0) {
      sum += i;
      sentence = `${sentence + i}\n`;
    }
  }
  console.log(`The sum: ${sum}`);
  console.log(sentence);
}

numsDivisibleBy9('100', '200');
