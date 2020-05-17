function cake(params) {
  const width = +params.shift();
  const height = +params.shift();
  const cakeSize = width * height;
  let eaten = 0;
  while (cakeSize > eaten) {
    const letsEat = params.shift();
    if (letsEat != 'STOP') {
      eaten += +letsEat;
    } else {
      break;
    }
  }

  if (eaten <= cakeSize) {
    const diff = cakeSize - eaten;
    console.log(`${diff} pieces are left.`);
  } else {
    const diff = eaten - cakeSize;
    console.log(`No more cake left! You need ${diff} pieces more.`);
  }
}

cake(['10', '10', '20', '20', '20', '20', '21']);
cake(['10', '2', '2', '4', '6', 'STOP']);
