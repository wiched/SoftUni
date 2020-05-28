function changeBureau(input) {
  const bitcoinQty = Number(input.shift());
  const yuanQty = Number(input.shift());
  const comission = Number(input.shift());

  const bitcoinTolv = bitcoinQty * 1168;
  const yuanToDollar = yuanQty * 0.15;
  const yuanToLv = yuanToDollar * 1.76;
  const lvTotal = bitcoinTolv + +yuanToLv;
  const lvToEuro = lvTotal / 1.95;
  const comissionNumber = (lvToEuro * comission) / 100;
  const result = lvToEuro - comissionNumber;
  console.log(result.toFixed(2));
}

changeBureau(['1', '5', '5']);
changeBureau(['20', '5678', '2.4']);
