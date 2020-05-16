function minNumber(params) {
  let lowest = Number.POSITIVE_INFINITY;
  let currentNum = params.shift();

  while (currentNum !== 'Stop') {
    if (+currentNum < lowest) {
      lowest = +currentNum;
    }
    currentNum = params.shift();
  }
  console.log(lowest);
}

minNumber(['100', '99', '80', '70', 'Stop']);
minNumber(['-10', '20', '-30', 'Stop']);
minNumber(['45', '-20', '7', '99', 'Stop']);
minNumber(['999', 'Stop']);
minNumber(['-1', '-2', 'Stop']);
