function harvest(x, y, z, workers) {
  x = +x;
  y = +y;
  z = +z;
  workers = +workers;
  const total = x * y;
  const wine = (total * 0.4) / 2.5;
  if (wine >= z) {
    const wineLeft = wine - z;
    const winePerPerson = wineLeft / workers;
    console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
    console.log(
      `${Math.ceil(wineLeft)} liters left -> ${Math.ceil(
        winePerPerson
      )} liters per person.`
    );
  } else {
    const needed = z - wine;
    console.log(
      `It will be a tough winter! More ${Math.floor(needed)} liters wine needed.`
    );
  }
}

harvest('650', '2', '175', '3');
harvest('1020', '1.5', '425', '4');
