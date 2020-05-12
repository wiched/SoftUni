function divideWithoutRemainder(params) {
  const howMany = params.shift();
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  for (let i = 0; i < params.length; i++) {
    if (params[i] % 2 === 0) {
      p1++;
    }
    if (params[i] % 3 === 0) {
      p2++;
    }
    if (params[i] % 4 === 0) {
      p3++;
    }
  }
  p1 = (p1 / howMany) * 100;
  p2 = (p2 / howMany) * 100;
  p3 = (p3 / howMany) * 100;
  console.log(`${p1.toFixed(2)}%`);
  console.log(`${p2.toFixed(2)}%`);
  console.log(`${p3.toFixed(2)}%`);
}

divideWithoutRemainder(['10', '680', '2', '600', '200', '800', '799', '199', '46', '128', '65']);
divideWithoutRemainder(['3', '3', '6', '9']);
