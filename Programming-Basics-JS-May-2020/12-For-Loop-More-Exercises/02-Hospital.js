function hospital(params) {
  const period = +params.shift();
  let doctors = 7;
  let pregledani = 0;
  let nepregledani = 0;
  let days = 0;

  for (let i = 0; i < period; i++) {
    days++;
    if (days % 3 === 0) {
      if (nepregledani > pregledani) {
        doctors++;
      }
    }

    if (params[i] <= doctors) {
      pregledani += +params[i];
    } else {
      nepregledani += Math.abs(params[i] - doctors);
      pregledani += doctors;
    }
  }

  console.log(`Treated patients: ${pregledani}.`);
  console.log(`Untreated patients: ${nepregledani}.`);
}

hospital(['4', '7', '27', '9', '1']);
hospital(['6', '25', '25', '25', '25', '25', '2']);
