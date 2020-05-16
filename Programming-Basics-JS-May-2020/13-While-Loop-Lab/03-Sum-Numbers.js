function sumNumbers(params) {
  const sum = +params.shift();
  let currentNum = +params.shift();
  let result = 0;
  while (result < sum) {
    result += currentNum;
    currentNum = +params.shift();
  }
  console.log(result);
}

sumNumbers(['100', '10', '20', '30', '40']);
sumNumbers(['20', '1', '2', '3', '4', '5', '6']);
