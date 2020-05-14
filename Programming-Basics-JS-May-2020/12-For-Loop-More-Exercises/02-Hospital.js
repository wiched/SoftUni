function hospital(params) {
  const period = +params.shift();
  let doctors = 7;
  let treated = 0;
  let untreated = 0;
  let days = 0;

  for (let i = 0; i < period; i++) {
    days++;
    if (days % 3 === 0) {
      if (untreated > treated) {
        doctors++;
      }
    }

    if (params[i] <= doctors) {
      treated += +params[i];
    } else {
      untreated += Math.abs(params[i] - doctors);
      treated += doctors;
    }
  }

  console.log(`Treated patients: ${treated}.`);
  console.log(`Untreated patients: ${untreated}.`);
}

hospital(['4', '7', '27', '9', '1']);
hospital(['6', '25', '25', '25', '25', '25', '2']);
