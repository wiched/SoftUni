function sumOfNumbers(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += +num[i];
  }
  console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers('1234');
sumOfNumbers('564891');
