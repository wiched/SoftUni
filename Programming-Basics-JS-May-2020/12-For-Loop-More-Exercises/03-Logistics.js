function logistics(params) {
  const cargoQty = +params.shift();
  const tons = params.reduce((a, b) => +a + +b, 0);
  let bus = 0;
  let truck = 0;
  let train = 0;

  for (let i = 0; i < params.length; i++) {
    if (params[i] <= 3) {
      bus += +params[i];
    } else if (params[i] >= 4 && params[i] <= 11) {
      truck += +params[i];
    } else if (params[i] >= 12) {
      train += +params[i];
    }
  }
  const all = bus * 200 + truck * 175 + train * 120;
  const average = all / tons;
  const busPercentage = (bus / tons) * 100;
  const truckPercentage = (truck / tons) * 100;
  const trainPercentage = (train / tons) * 100;
  console.log(average.toFixed(2));
  console.log(`${busPercentage.toFixed(2)}%`);
  console.log(`${truckPercentage.toFixed(2)}%`);
  console.log(`${trainPercentage.toFixed(2)}%`);
}

logistics(['4', '1', '5', '16', '3']);
logistics(['5', '2', '10', '20', '1', '7']);
