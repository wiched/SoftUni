function volleyball(type, p, h) {
  p = +p;
  h = +h;
  const weekendsInSofia = 48 - h;
  const gamesInSofia = (weekendsInSofia * 3) / 4;
  const gamesInHomeTown = h;
  const holidayGames = (p * 2) / 3;
  let sumGames = gamesInHomeTown + gamesInSofia + holidayGames;
  if (type === 'leap') {
    sumGames *= 1.15;
  }
  console.log(Math.floor(sumGames));
}

volleyball('leap', '5', '2');
volleyball('normal', '3', '2');
volleyball('leap', '2', '3');
volleyball('normal', '11', '6');
volleyball('leap', '0', '1');
volleyball('normal', '6', '13');
