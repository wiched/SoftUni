function foodForPets(params) {
  const daysTotal = +params.shift();
  const foodTotal = +params.shift();
  let biscuits = 0;
  let totalEaten = 0;
  let dogTotal = 0;
  let catTotal = 0;
  for (let i = 1; i <= daysTotal; i++) {
    const dogEaten = +params.shift();
    const catEaten = +params.shift();
    if (i % 3 === 0) {
      const sum = dogEaten + catEaten;
      const sumPercent = sum * 0.1;
      biscuits += sumPercent;
    }
    dogTotal += dogEaten;
    catTotal += catEaten;
    totalEaten += dogEaten;
    totalEaten += catEaten;
  }
  const dogPercent = (dogTotal / totalEaten) * 100;
  const catPercent = (catTotal / totalEaten) * 100;
  const totalPercent = (totalEaten / foodTotal) * 100;
  console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
  console.log(`${totalPercent.toFixed(2)}% of the food has been eaten.`);
  console.log(`${dogPercent.toFixed(2)}% eaten from the dog.`);
  console.log(`${catPercent.toFixed(2)}% eaten from the cat.`);
}

foodForPets(['3', '1000', '300', '20', '100', '30', '110', '40']);
foodForPets(['3', '500', '100', '30', '110', '25', '120', '35']);
