function maxNumber(params) {
  let biggest = Number.NEGATIVE_INFINITY;
  let currentNum = params.shift();

  while (currentNum !== 'Stop') {
    if (+currentNum > biggest) {
      biggest = +currentNum;
    }
    currentNum = params.shift();
  }
  console.log(biggest);
}

maxNumber(['100', '99', '80', '70', 'Stop']);
maxNumber(['-10', '20', '-30', 'Stop']);
maxNumber(['-1', '-2', 'Stop']);
maxNumber(['1', '3', '-1', '-3', 'Stop']);
