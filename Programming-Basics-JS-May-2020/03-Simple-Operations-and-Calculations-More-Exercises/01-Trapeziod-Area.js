function trapeziodArea(b1, b2, h) {
  b1 = +b1;
  b2 = +b2;
  h = +h;
  const area = ((b1 + b2) * h) / 2;
  console.log(area.toFixed(2));
}

trapeziodArea('8', '13', '7');
