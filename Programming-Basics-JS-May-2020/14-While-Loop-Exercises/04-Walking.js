function walking(params) {
  const goal = 10000;
  let steps = 0;

  while (steps < goal) {
    let currentSteps = params.shift();
    if (currentSteps != 'Going home') {
      steps += Number(currentSteps);
    } else {
      currentSteps = params.shift();
      steps += Number(currentSteps);
      break;
    }
  }

  if (steps >= goal) {
    const diff = steps - goal;
    console.log('Goal reached! Good job!');
    console.log(`${diff} steps over the goal!`);
  } else {
    const diff = goal - steps;
    console.log(`${diff} more steps to reach goal.`);
  }
}

// walking(['1000', '1500', '2000', '6500']);
// walking(['1500', '3000', '250', '1548', '2000', 'Going home', '2000']);
// walking(['1500', '300', '2500', '3000', 'Going home', '200']);
walking(['125', '250', '4000', '30', '2678', '4682']);
