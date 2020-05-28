function trekkingMania(params) {
  const groupsQty = +params.shift();
  let musala = 0;
  let monblan = 0;
  let kili = 0;
  let k2 = 0;
  let everest = 0;
  let totalPeople = 0;
  for (let i = 1; i <= groupsQty; i++) {
    const groupSize = +params.shift();
    totalPeople += groupSize;
    if (groupSize <= 5) {
      musala += groupSize;
    } else if (groupSize <= 12) {
      monblan += groupSize;
    } else if (groupSize <= 25) {
      kili += groupSize;
    } else if (groupSize <= 40) {
      k2 += groupSize;
    } else if (groupSize >= 41) {
      everest += groupSize;
    }
  }
  const musalaPercent = (musala / totalPeople) * 100;
  const monblanPercent = (monblan / totalPeople) * 100;
  const kiliPercent = (kili / totalPeople) * 100;
  const k2Percent = (k2 / totalPeople) * 100;
  const everestPercent = (everest / totalPeople) * 100;
  console.log(`${musalaPercent.toFixed(2)}%`);
  console.log(`${monblanPercent.toFixed(2)}%`);
  console.log(`${kiliPercent.toFixed(2)}%`);
  console.log(`${k2Percent.toFixed(2)}%`);
  console.log(`${everestPercent.toFixed(2)}%`);
}

// trekkingMania(['10', '10', '5', '1', '100', '12', '26', '17', '37', '40', '78']);
trekkingMania(['5', '25', '41', '31', '250', '6']);
