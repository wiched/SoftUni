function housePainting(x, y, h) {
  x = +x;
  y = +y;
  h = +h;
  const twoSides = 2 * (x * y) - 2 * (1.5 * 1.5);
  const frontAndBack = 2 * (x * x) - 1.2 * 2;
  const greenPaint = (frontAndBack + twoSides) / 3.4;
  console.log(greenPaint.toFixed(2));
  const roofSides = 2 * (x * y);
  const roofFrontAndBack = 2 * ((x * h) / 2);
  const redPaint = (roofSides + roofFrontAndBack) / 4.3;
  console.log(redPaint.toFixed(2));
}

housePainting('6', '10', '5.2');
