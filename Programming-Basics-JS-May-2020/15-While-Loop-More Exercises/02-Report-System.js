function reportSystem(params) {
  const fullSum = +params.shift();
  let paidCash = 0;
  let paidCard = 0;
  let cashCount = 0;
  let cardCount = 0;
  let total = 0;
  let counter = 0;

  while (total < fullSum) {
    counter++;
    const transcation = params.shift();
    if (transcation == 'End') {
      break;
    }
    if (counter % 2 !== 0) {
      if (+transcation > 100) {
        console.log('Error in transaction!');
      } else if (+transcation <= 100) {
        paidCash += +transcation;
        cashCount++;
        total += +transcation;
        console.log('Product sold!');
      }
    } else if (counter % 2 === 0) {
      if (+transcation < 10) {
        console.log('Error in transaction!');
      } else {
        paidCard += +transcation;
        cardCount++;
        total += +transcation;
        console.log('Product sold!');
      }
    }
  }

  if (total >= fullSum) {
    console.log(`Average CS: ${(paidCash / cashCount).toFixed(2)}`);
    console.log(`Average CC: ${(paidCard / cardCount).toFixed(2)}`);
  } else {
    console.log('Failed to collect required money for charity.');
  }
}

reportSystem(['500', '120', '8', '63', '256', '78', '317']);
reportSystem(['600', '86', '150', '98', '227', 'End']);
