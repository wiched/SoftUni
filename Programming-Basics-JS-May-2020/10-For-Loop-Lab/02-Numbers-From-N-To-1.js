function fromNto1(number) {
  number = +number;
  for (let i = number; i >= 1; i--) {
    console.log(i);
  }
}

fromNto1('2');
fromNto1('3');
fromNto1('5');
