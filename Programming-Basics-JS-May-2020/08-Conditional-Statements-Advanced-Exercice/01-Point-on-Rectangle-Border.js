function pointOnRectangleBorder(x1, y1, x2, y2, x, y) {
  x1 = +x1;
  y1 = +y1;
  x2 = +x2;
  y2 = +y2;
  x = +x;
  y = +y;

  const firstCondition = (x == x1 || x == x2) && (y >= y1 && y <= y2);
  const secondCondition = (y == y1 || y == y2) && (x >= x1 && x <= x2);
  if (firstCondition || secondCondition) {
    console.log('Border');
  } else {
    console.log('Inside / Outside');
  }
}

pointOnRectangleBorder('2', '-3', '12', '3', '8', '-1');
pointOnRectangleBorder('2', '-3', '12', '3', '12', '-1');
