function weatherForecast(weather) {
  const result =
    weather === 'sunny' ? `It's warm outside!` : `It's cold outside!`;
  console.log(result);
}

weatherForecast('sunny');
weatherForecast('clowdy');
weatherForecast('snowy');
