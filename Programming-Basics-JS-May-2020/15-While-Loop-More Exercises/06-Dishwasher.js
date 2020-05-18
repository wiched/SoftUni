function dishwasher(params) {
  const bottles = +params.shift();
  let soapMl = bottles * 750;
  let pots = 0;
  let plates = 0;
  let counter = 0;

  while (soapMl >= 0) {
    counter++;
    const qty = params.shift();
    if (qty === 'End') {
      break;
    }

    if (counter % 3 === 0) {
      pots += +qty;
      const howMany = +qty * 15;
      soapMl -= howMany;
    } else {
      plates += +qty;
      const howMany = +qty * 5;
      soapMl -= howMany;
    }
  }

  if (soapMl >= 0) {
    console.log('Detergent was enough!');
    console.log(`${plates} dishes and ${pots} pots were washed.`);
    console.log(`Leftover detergent ${soapMl} ml.`);
  } else {
    console.log(`Not enough detergent, ${Math.abs(soapMl)} ml. more necessary!`);
  }
}

// dishwasher(['2', '53', '65', '55', 'End']);
dishwasher(['1', '10', '15', '10', '12', '13', '30']);
