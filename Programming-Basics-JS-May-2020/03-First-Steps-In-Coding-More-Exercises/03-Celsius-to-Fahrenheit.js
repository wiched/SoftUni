function toFahrenheit(celcius) {
  celcius = +celcius;
  const fahrenheit = celcius * 1.8 + 32;
  console.log(fahrenheit.toFixed(2));
}

toFahrenheit('25');
toFahrenheit('0');
toFahrenheit('-5.5');
toFahrenheit('32.3');
