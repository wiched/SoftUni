function footballLeague(params) {
  const capacity = params.shift();
  const fans = params.shift();
  let a = 0;
  let b = 0;
  let v = 0;
  let g = 0;

  for (let i = 0; i < fans; i++) {
    const fan = params.shift();

    if (fan === 'A') {
      a++;
    } else if (fan === 'B') {
      b++;
    } else if (fan === 'V') {
      v++;
    } else if (fan === 'G') {
      g++;
    }
  }

  const aPercentage = (a / fans) * 100;
  const bPercentage = (b / fans) * 100;
  const vPercentage = (v / fans) * 100;
  const gPercentage = (g / fans) * 100;
  const filledPercentage = (fans / capacity) * 100;
  console.log(`${aPercentage.toFixed(2)}%`);
  console.log(`${bPercentage.toFixed(2)}%`);
  console.log(`${vPercentage.toFixed(2)}%`);
  console.log(`${gPercentage.toFixed(2)}%`);
  console.log(`${filledPercentage.toFixed(2)}%`);
}

// footballLeague(['76', '10', 'A', 'V', 'V', 'V', 'G', 'B', 'A', 'V', 'B', 'B']);
// footballLeague(['93', '16', 'A', 'V', 'G', 'G', 'B', 'B', 'G', 'B', 'A', 'B', 'B', 'B', 'A', 'B', 'B', 'A']);
footballLeague(['1000', '12', 'A', 'A', 'V', 'V', 'A', 'G', 'A', 'A', 'V', 'G', 'V', 'A']);
