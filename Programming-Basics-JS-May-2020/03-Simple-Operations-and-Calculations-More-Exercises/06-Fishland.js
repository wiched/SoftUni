function fishland(skumriqPrice, cacaPrice, palamudQty, safridQty, midiQty) {
  skumriqPrice = +skumriqPrice;
  cacaPrice = +cacaPrice;
  palamudQty = +palamudQty;
  safridQty = +safridQty;
  midiQty = +midiQty;
  const palamudPrice = skumriqPrice + skumriqPrice * 0.6;
  const palamudSum = palamudPrice * palamudQty;
  const safridPrice = cacaPrice + cacaPrice * 0.8;
  const safridSum = safridPrice * safridQty;
  const midiSum = midiQty * 7.5;
  const moneyNeeded = (palamudSum + safridSum + midiSum).toFixed(2);
  console.log(moneyNeeded);
}

fishland('6.90', '4.20', '1.5', '2.5', '1');
fishland('5.55', '3.57', '4.3', '3.6', '7');
