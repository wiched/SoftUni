function multiplicationTable(num) {
  num = +num;

  for (let i = 1; i <= 10; i++) {
    const result = i * num;
    console.log(`${i} * ${num} = ${result}`);
  }
}

multiplicationTable('5');
