function factorial(num) {
  num = +num;
  let currentNum;
  let result = 1;
  for (let i = 1; i <= num; i++) {
    currentNum = i;
    result *= currentNum;
  }
  console.log(result);
}

factorial('4');
factorial('8');
