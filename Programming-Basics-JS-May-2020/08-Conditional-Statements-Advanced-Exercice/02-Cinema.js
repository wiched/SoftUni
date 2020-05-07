function cinema(type, rows, cols) {
  rows = +rows;
  cols = +cols;
  let revenue = 0;
  if (type === 'Premiere') {
    revenue = rows * cols * 12;
  } else if (type === 'Normal') {
    revenue = rows * cols * 7.5;
  } else {
    revenue = rows * cols * 5;
  }
  console.log(`${revenue.toFixed(2)} leva`);
}

cinema('Premiere', '10', '12');
cinema('Normal', '21', '13');
cinema('Discount', '12', '30');
