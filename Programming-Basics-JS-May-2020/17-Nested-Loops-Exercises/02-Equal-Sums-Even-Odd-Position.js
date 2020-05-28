function equalSumsEvenOddPosition(params) {
  const firstNum = +params.shift();
  const secondNum = +params.shift();
  let printLine = '';
  for (let i = firstNum; i <= secondNum; i++) {
    const currentNum = `${i}`;
    let oddSum = 0;
    let evenSum = 0;
    for (let j = 0; j < currentNum.length; j++) {
      const currentDigit = +currentNum.charAt(j);
      if (j % 2 === 0) {
        evenSum += currentDigit;
      } else {
        oddSum += currentDigit;
      }
    }
    if (oddSum === evenSum) {
      printLine += `${i} `;
    }
  }
  console.log(printLine);
}

equalSumsEvenOddPosition(['100000', '100050']);
// equalSumsEvenOddPosition(['123456', '124000']);
// equalSumsEvenOddPosition(['299900', '300000']);
// equalSumsEvenOddPosition(['100115', '100120']);
