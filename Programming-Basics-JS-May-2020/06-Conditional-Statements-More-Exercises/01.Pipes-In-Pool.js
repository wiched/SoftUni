function pipesInPool(v, p1, p2, h) {
  v = +v;
  p1 = +p1;
  p2 = +p2;
  h = +h;
  const p1h = p1 * h;
  const p2h = p2 * h;
  const p1p2 = p1h + p2h;
  if (p1p2 <= v) {
    const percentage = (p1p2 * 100) / v;
    const pipe1Percentage = ((p1h * 100) / p1p2).toFixed(2);
    const pipe2Percentage = ((p2h * 100) / p1p2).toFixed(2);
    console.log(
      `The pool is ${percentage}% full. Pipe 1: ${pipe1Percentage}%. Pipe 2: ${pipe2Percentage}%.`
    );
  } else {
    const overflow = p1p2 - v;
    console.log(`For ${h.toFixed(2)} hours the pool overflows with ${overflow} liters.`);
  }
}

pipesInPool('1000', '100', '120', '3');
pipesInPool('100', '100', '100', '2.5');
