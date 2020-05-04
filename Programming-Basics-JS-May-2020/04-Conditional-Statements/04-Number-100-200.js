function number100200(number) {
  if (number < 100) {
    console.log('Less than 100');
  } else if (number >= 100 && number <= 200) {
    console.log('Between 100 and 200');
  } else {
    console.log('Greater than 200');
  }
}

number100200('95');
number100200('120');
number100200('210');
