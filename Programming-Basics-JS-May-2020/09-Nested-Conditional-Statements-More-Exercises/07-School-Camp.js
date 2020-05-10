function schoolCamp(season, groupType, students, nights) {
  students = +students;
  nights = +nights;
  let price = 0;
  let sport = '';
  if (season === 'Winter') {
    if (groupType === 'girls') {
      sport = 'Gymnastics';
      price = nights * students * 9.6;
    } else if (groupType === 'boys') {
      sport = 'Judo';
      price = nights * students * 9.6;
    } else if (groupType === 'mixed') {
      sport = 'Ski';
      price = nights * students * 10;
    }
  } else if (season === 'Spring') {
    if (groupType === 'girls') {
      sport = 'Athletics';
      price = nights * students * 7.2;
    } else if (groupType === 'boys') {
      sport = 'Tennis';
      price = nights * students * 7.2;
    } else if (groupType === 'mixed') {
      sport = 'Cycling';
      price = nights * students * 9.5;
    }
  } else if (season === 'Summer') {
    if (groupType === 'girls') {
      sport = 'Volleyball';
      price = nights * students * 15;
    } else if (groupType === 'boys') {
      sport = 'Football';
      price = nights * students * 15;
    } else if (groupType === 'mixed') {
      sport = 'Swimming';
      price = nights * students * 20;
    }
  }
  if (students >= 50) {
    price *= 0.5;
  }
  if (students >= 20 && students < 50) {
    price *= 0.85;
  }
  if (students >= 10 && students < 20) {
    price *= 0.95;
  }

  console.log(`${sport} ${price.toFixed(2)} lv.`);
}

schoolCamp('Spring', 'girls', '20', '7');
schoolCamp('Winter', 'mixed', '9', '15');
schoolCamp('Summer', 'boys', '60', '7');
schoolCamp('Spring', 'mixed', '17', '14');
