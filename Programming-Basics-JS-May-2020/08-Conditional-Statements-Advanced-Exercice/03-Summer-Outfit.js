function summerOutfit(deg, time) {
  deg = +deg;
  if (deg >= 10 && deg <= 18) {
    if (time === 'Morning') {
      console.log(`It's ${deg} degrees, get your Sweatshirt and Sneakers.`);
    } else if (time === 'Afternoon') {
      console.log(`It's ${deg} degrees, get your Shirt and Moccasins.`);
    } else if (time === 'Evening') {
      console.log(`It's ${deg} degrees, get your Shirt and Moccasins.`);
    }
  } else if (deg > 18 && deg <= 24) {
    if (time === 'Morning') {
      console.log(`It's ${deg} degrees, get your Shirt and Moccasins.`);
    } else if (time === 'Afternoon') {
      console.log(`It's ${deg} degrees, get your T-Shirt and Sandals.`);
    } else if (time === 'Evening') {
      console.log(`It's ${deg} degrees, get your Shirt and Moccasins.`);
    }
  } else if (deg >= 25) {
    if (time === 'Morning') {
      console.log(`It's ${deg} degrees, get your T-Shirt and Sandals.`);
    } else if (time === 'Afternoon') {
      console.log(`It's ${deg} degrees, get your Swim Suit and Barefoot.`);
    } else if (time === 'Evening') {
      console.log(`It's ${deg} degrees, get your Shirt and Moccasins.`);
    }
  }
}

summerOutfit('16', 'Morning');
summerOutfit('22', 'Afternoon');
summerOutfit('28', 'Evening');
