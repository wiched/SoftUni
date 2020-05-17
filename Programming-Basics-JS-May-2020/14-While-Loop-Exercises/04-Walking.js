function walking(params) {
  let steps = 0;

  while (steps < 10000) {
    let currentSteps = Number(params.shift());
    if (!isNaN(currentSteps)) {
      steps += Number(currentSteps);
    } else {
      currentSteps = Number(params.shift());
      steps += Number(currentSteps);
      break;
    }
  }

  if (steps >= 10000) {
    const diff = steps - 10000;
    console.log('Goal reached! Good job!');
    console.log(`${diff} steps over the goal!`);
  } else {
    const diff = 10000 - steps;
    console.log(`${diff} more steps to reach goal.`);
  }
}

walking(['1000', '1500', '2000', '6500']);
// walking(['1500', '3000', '250', '1548', '2000', 'Going home', '2000']);
walking(['1500', '300', '2500', '3000', 'Going home', '200']);
// walking(['125', '250', '4000', '30', '2678', '4682']);
