function personalTitles(age, sex) {
  age = +age;
  if (sex === 'f') {
    if (age >= 16) {
      console.log('Ms.');
    } else {
      console.log('Miss');
    }
  } else if (age >= 16) {
    console.log('Mr.');
  } else {
    console.log('Master');
  }
}

personalTitles('12', 'f');
personalTitles('17', 'm');
personalTitles('13.5', 'm');
