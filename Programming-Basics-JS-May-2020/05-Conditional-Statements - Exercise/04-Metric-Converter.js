function metricConverter(number, fromWhat, toWhat) {
  number = +number;
  if (fromWhat === 'mm' && toWhat === 'm') {
    console.log((number / 1000).toFixed(3));
  }
  if (fromWhat === 'mm' && toWhat === 'cm') {
    console.log((number / 10).toFixed(3));
  }
  if (fromWhat === 'm' && toWhat === 'cm') {
    console.log((number * 100).toFixed(3));
  }
  if (fromWhat === 'm' && toWhat === 'mm') {
    console.log((number * 1000).toFixed(3));
  }
  if (fromWhat === 'cm' && toWhat === 'm') {
    console.log((number / 100).toFixed(3));
  }
  if (fromWhat === 'cm' && toWhat === 'mm') {
    console.log((number * 10).toFixed(3));
  }
}

metricConverter('12', 'mm', 'm');
metricConverter('150', 'm', 'cm');
metricConverter('45', 'cm', 'mm');
