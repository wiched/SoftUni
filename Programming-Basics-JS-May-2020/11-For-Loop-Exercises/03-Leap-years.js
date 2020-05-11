function leapYears(leapYear, randomYear) {
  leapYear = +leapYear;
  randomYear = +randomYear;
  for (let i = leapYear; i <= randomYear; i++) {
    if (i % 4 === 0) {
      console.log(i);
    }
  }
}

leapYears('1908', '1919');
leapYears('2000', '2011');
leapYears('1584', '1597');
leapYears('2020', '2032');
