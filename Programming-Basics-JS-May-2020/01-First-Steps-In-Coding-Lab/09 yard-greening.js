function yardGreening(sqm) {
  const price = sqm * 7.61;
  const discount = (price / 100) * 18;
  const finalPrice = price - discount;
  console.log(`The final price is: ${finalPrice} lv.`);
  console.log(`The discount is: ${discount} lv.`);
}

yardGreening('550');
