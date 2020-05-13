// Without loop
function minNumber(params) {
  const n = params.shift();
  const lowest = Math.min(...params);
  console.log(lowest);
}

minNumber(['2', '100', '99']);
minNumber(['3', '-10', '20', '-30']);
minNumber(['4', '45', '-20', '7', '99']);
minNumber(['1', '999']);
minNumber(['2', '-1', '-2']);

// With loop
function minNumber(params) {
  const n = params.shift();
  let lowest = Number.POSITIVE_INFINITY;
  for (let i = 0; i < n; i++) {
    if (params[i] < lowest) {
      lowest = params[i];
    }
  }
  console.log(lowest);
}

minNumber(['2', '100', '99']);
minNumber(['3', '-10', '20', '-30']);
minNumber(['4', '45', '-20', '7', '99']);
minNumber(['1', '999']);
minNumber(['2', '-1', '-2']);
