function catWalking(params) {
  const dailyWalkMins = +params.shift();
  const numOfWalks = +params.shift();
  const caloriesEaten = +params.shift();

  const dailyMinSum = dailyWalkMins * numOfWalks;
  const caloriesBurned = dailyMinSum * 5;
  const halfCalories = caloriesEaten * 0.5;

  if (caloriesBurned >= halfCalories) {
    console.log(
      `Yes, the walk for your cat is enough. Burned calories per day: ${caloriesBurned}.`
    );
  } else {
    console.log(
      `No, the walk for your cat is not enough. Burned calories per day: ${caloriesBurned}.`
    );
  }
}

catWalking(['30', '3', '600']);
catWalking(['15', '2', '500']);
catWalking(['40', '2', '300']);
