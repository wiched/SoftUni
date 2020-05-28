function energyBooster(params) {
  const fruit = params.shift();
  const size = params.shift();
  const qty = params.shift();
  let packetPrice = 0;
  let setPrice = 0;
  if (size === 'small') {
    if (fruit === 'Watermelon') {
      packetPrice = 2 * 56;
      setPrice = packetPrice * qty;
    } else if (fruit === 'Mango') {
      packetPrice = 2 * 36.66;
      setPrice = packetPrice * qty;
    } else if (fruit === 'Pineapple') {
      packetPrice = 2 * 42.1;
      setPrice = packetPrice * qty;
    } else if (fruit === 'Raspberry') {
      packetPrice = 2 * 20;
      setPrice = packetPrice * qty;
    }
  } else if (size === 'big') {
    if (fruit === 'Watermelon') {
      packetPrice = 5 * 28.7;
      setPrice = packetPrice * qty;
    } else if (fruit === 'Mango') {
      packetPrice = 5 * 19.6;
      setPrice = packetPrice * qty;
    } else if (fruit === 'Pineapple') {
      packetPrice = 5 * 24.8;
      setPrice = packetPrice * qty;
    } else if (fruit === 'Raspberry') {
      packetPrice = 5 * 15.2;
      setPrice = packetPrice * qty;
    }
  }

  if (setPrice >= 400 && setPrice <= 1000) {
    setPrice *= 0.85;
  } else if (setPrice > 1000) {
    setPrice *= 0.5;
  }
  console.log(`${setPrice.toFixed(2)} lv.`);
}

energyBooster(['Watermelon', 'big', '4']);
energyBooster(['Pineapple', 'small', '1']);
energyBooster(['Raspberry', 'small', '50']);
energyBooster(['Mango', 'big', '8']);
