function sleepyTomCat(days) {
  days = +days;
  const workDays = 365 - days;
  const playTime = workDays * 63 + days * 127;
  const yearMinutes = 30000;
  if (yearMinutes > playTime) {
    const minutesLeft = yearMinutes - playTime;
    const hours = Math.trunc(minutesLeft / 60);
    const minutes = minutesLeft % 60;
    console.log('Tom sleeps well');
    console.log(`${hours} hours and ${minutes} minutes less for play`);
  } else if (yearMinutes < playTime) {
    const minutesForPlay = playTime - yearMinutes;
    const hours = Math.trunc(minutesForPlay / 60);
    const minutes = minutesForPlay % 60;
    console.log('Tom will run away');
    console.log(`${hours} hours and ${minutes} minutes more for play`);
  }
}

// sleepyTomCat('20');
sleepyTomCat('113');

// 30000 minuti na godina
// rabota - 63 na den
// pochivka - 127 na den
