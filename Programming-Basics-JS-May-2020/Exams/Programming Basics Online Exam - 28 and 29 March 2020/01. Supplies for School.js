function suppliesForSchool(params) {
  const pens = +params.shift();
  const markers = +params.shift();
  const cleaner = +params.shift();
  const discountPercentage = +params.shift();

  const total = pens * 5.8 + markers * 7.2 + cleaner * 1.2;
  const discount = total - (total * discountPercentage) / 100;
  console.log(discount.toFixed(3));
}

suppliesForSchool(['2', '3', '2.5', '25']);
suppliesForSchool(['4', '2', '5', '13']);
