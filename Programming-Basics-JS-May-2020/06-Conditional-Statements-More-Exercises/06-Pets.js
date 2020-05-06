function pets(days, foodLeftkg, dogKg, catKg, turtleGrams) {
  days = +days;
  foodLeftkg = +foodLeftkg;
  dogKg = +dogKg;
  catKg = +catKg;
  turtleGrams = +turtleGrams;

  const turtleKg = turtleGrams / 1000;
  const totalFoodNeeded = dogKg + catKg + turtleKg;
  const foodForDays = Math.ceil(totalFoodNeeded * days);
  if (foodForDays <= foodLeftkg) {
    const diff = foodLeftkg - foodForDays;
    console.log(`${diff} kilos of food left.`);
  } else {
    const diff = foodForDays - foodLeftkg;
    console.log(`${diff} more kilos of food are needed.`);
  }
}

pets('2', '10', '1', '1', '1200');
pets('5', '10', '2.1', '0.8', '321');
