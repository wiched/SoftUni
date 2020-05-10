function multiplyBy2(...args) {
  for (i = 0; i < args.length; i++) {
    if (args[i] > 0) {
      const result = args[i] * 2;
      console.log(`Result: ${result.toFixed(2)}`);
    } else if (args[i] < 0) {
      console.log('Negative number!');
    } else {
      console.log('Result: 0.00');
    }
  }
}

multiplyBy2('12', '43.2144', '12.3', '543.23', '-20');
multiplyBy2('23.43', '12.3245', '0', '65.23432', '23', '65', '-12');
multiplyBy2('-123');
