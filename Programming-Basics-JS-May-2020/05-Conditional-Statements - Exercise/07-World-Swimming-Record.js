function worldSwimmingRecord(recordInSecs, distanceInMeters, secsPerMeter) {
  recordInSecs = +recordInSecs;
  distanceInMeters = +distanceInMeters;
  secsPerMeter = +secsPerMeter;
  const distanceInSeconds = distanceInMeters * secsPerMeter;
  const delay = Math.trunc(distanceInMeters / 15) * 12.5;
  const distanceInSecondsAfterDelay = distanceInSeconds + delay;
  if (distanceInSecondsAfterDelay < recordInSecs) {
    console.log(
      `Yes, he succeeded! The new world record is ${distanceInSecondsAfterDelay.toFixed(
        2
      )} seconds.`
    );
  } else {
    const slower = distanceInSecondsAfterDelay - recordInSecs;
    console.log(`No, he failed! He was ${slower.toFixed(2)} seconds slower.`);
  }
}

worldSwimmingRecord('10464', '1500', '20');
worldSwimmingRecord('55555.67', '3017', '5.03');
