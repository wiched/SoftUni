function radiansToDegrees(radians) {
  radians = +radians;
  const degrees = ((radians * 180) / Math.PI).toFixed(0);
  console.log(degrees);
}

radiansToDegrees('3.1416');
