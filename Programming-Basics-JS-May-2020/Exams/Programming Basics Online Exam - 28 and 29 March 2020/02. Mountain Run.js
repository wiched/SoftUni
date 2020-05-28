function catWalking(params) {
  const recordInSecs = +params.shift();
  const distanceInMeters = +params.shift();
  const OneMeterPerSecs = +params.shift();
  const hasToClimb = distanceInMeters * OneMeterPerSecs;
  const delay = Math.trunc(distanceInMeters / 50) * 30;

  const totalTime = hasToClimb + delay;

  if (recordInSecs <= totalTime) {
    const diff = totalTime - recordInSecs;
    console.log(`No! He was ${diff.toFixed(2)} seconds slower.`);
  } else {
    const diff = recordInSecs - totalTime;
    console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
  }
}

catWalking(['10164', '1400', '25']);
catWalking(['5554.36', '1340', '3.23']);
catWalking(['1377', '389', '3']);
