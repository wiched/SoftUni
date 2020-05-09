function onTimeForTheExam(examHour, examMinute, hour, minute) {
  examHour = +examHour;
  examMinute = +examMinute;
  hour = +hour;
  minute = +minute;

  const otishulMin = hour * 60 + minute;
  const izpitaMin = examHour * 60 + examMinute;

  if (otishulMin > izpitaMin) {
    // zakusnql
    const diff = otishulMin - izpitaMin;
    if (diff < 60) {
      // zakusnql i zakusnenie pod chas
      console.log('Late');
      console.log(`${diff} minutes after the start`);
    } else if (diff >= 60) {
      const hours = Math.floor(diff / 60);
      const minutes = diff % 60;
      if (minutes < 10) {
        console.log('Late');
        console.log(`${hours}:0${minutes} hours after the start`);
      } else {
        console.log('Late');
        console.log(`${hours}:${minutes} hours after the start`);
      }
    }
  } else if (izpitaMin >= otishulMin) {
    // podranil ili navreme
    const diff = izpitaMin - otishulMin;
    const hours = Math.floor(diff / 60);
    const minutes = diff % 60;
    if (izpitaMin === otishulMin) {
      console.log(`On time`); // ako e tochno
    } else if (diff >= 60) {
      // podranil s poveche ot chas
      if (minutes < 10) {
        console.log('Early');
        console.log(`${hours}:0${minutes} hours before the start`);
      } else {
        console.log('Early');
        console.log(`${hours}:${minutes} hours before the start`);
      }
    } else if (diff < 60 && diff > 30) {
      console.log('Early');
      console.log(`${minutes} minutes before the start`);
    } else if (diff <= 30) {
      console.log('On time');
      console.log(`${minutes} minutes before the start`);
    }
  }
}

onTimeForTheExam('9', '30', '9', '50');
onTimeForTheExam('9', '00', '8', '30');
onTimeForTheExam('16', '00', '15', '00');
onTimeForTheExam('9', '00', '10', '30');
onTimeForTheExam('14', '00', '13', '55');
onTimeForTheExam('11', '30', '8', '12');
onTimeForTheExam('10', '00', '10', '00');
onTimeForTheExam('11', '30', '10', '55');
onTimeForTheExam('11', '30', '12', '29');
