function timePlus15Minutes(hours, minutes) {
  hours = +hours;
  minutes = +minutes;
  let newHour = hours;
  let newMinutes = minutes;
  if (minutes + 15 < 60) {
    newMinutes += 15;
    if (newMinutes < 10) {
      console.log(`${hours}:0${newMinutes}`);
    } else {
      console.log(`${hours}:${newMinutes}`);
    }
  } else if (minutes + 15 >= 60) {
    if (hours === 23) {
      newHour = 0;
    } else {
      newHour += 1;
    }
    newMinutes = minutes + 15 - 60;
    if (newMinutes < 10) {
      console.log(`${newHour}:0${newMinutes}`);
    } else {
      console.log(`${newHour}:${newMinutes}`);
    }
  }
}

timePlus15Minutes('1', '46');
timePlus15Minutes('0', '01');
timePlus15Minutes('23', '59');
timePlus15Minutes('11', '08');
timePlus15Minutes('12', '49');
