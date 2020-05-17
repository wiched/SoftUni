function average(params) {
  const numbers = +params.shift();
  let sum = 0;
  for (i = 0; i < numbers; i++) {
    sum += +params[i];
  }
  const average = sum / numbers;
  console.log(average.toFixed(2));
}

average(['4', '3', '2', '4', '2']);
average(['2', '6', '4']);
average(['3', '82', '43', '22']);
average(['4', '95', '23', '76', '23']);
