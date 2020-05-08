function operationBetweenNumbers(n1, n2, operator) {
  n1 = +n1;
  n2 = +n2;
  if (operator === '+') {
    const result = n1 + n2;
    if (result % 2 === 0) {
      console.log(`${n1} + ${n2} = ${result} - even`);
    } else {
      console.log(`${n1} + ${n2} = ${result} - odd`);
    }
  } else if (operator === '-') {
    const result = n1 - n2;
    if (result % 2 === 0) {
      console.log(`${n1} - ${n2} = ${result} - even`);
    } else {
      console.log(`${n1} - ${n2} = ${result} - odd`);
    }
  } else if (operator === '*') {
    const result = n1 * n2;
    if (result % 2 === 0) {
      console.log(`${n1} * ${n2} = ${result} - even`);
    } else {
      console.log(`${n1} * ${n2} = ${result} - odd`);
    }
  } else if (operator === '/') {
    const result = n1 / n2;
    if (n2 === 0) {
      console.log(`Cannot divide ${n1} by zero`);
    } else {
      console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
    }
  } else if (operator === '%') {
    const result = n1 % n2;
    if (n2 === 0) {
      console.log(`Cannot divide ${n1} by zero`);
    } else {
      console.log(`${n1} % ${n2} = ${result}`);
    }
  }
}

operationBetweenNumbers('10', '12', '+');
operationBetweenNumbers('10', '1', '-');
operationBetweenNumbers('7', '3', '*');
operationBetweenNumbers('123', '12', '/');
operationBetweenNumbers('10', '3', '%');
operationBetweenNumbers('112', '0', '/');
operationBetweenNumbers('10', '0', '%');
