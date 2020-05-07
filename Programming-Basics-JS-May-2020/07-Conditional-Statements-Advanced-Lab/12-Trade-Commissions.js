function tradeCommissions(city, sells) {
  sells = +sells;
  let revenue = 0;

  if (city === 'Sofia') {
    if (sells >= 0 && sells <= 500) {
      revenue = sells * 0.05;
    } else if (sells > 500 && sells <= 1000) {
      revenue = sells * 0.07;
    } else if (sells > 1000 && sells <= 10000) {
      revenue = sells * 0.08;
    } else if (sells > 10000) {
      revenue = sells * 0.12;
    } else {
      console.log('error');
    }
  } else if (city === 'Varna') {
    if (sells >= 0 && sells <= 500) {
      revenue = sells * 0.045;
    } else if (sells > 500 && sells <= 1000) {
      revenue = sells * 0.075;
    } else if (sells > 1000 && sells <= 10000) {
      revenue = sells * 0.1;
    } else if (sells > 10000) {
      revenue = sells * 0.13;
    } else {
      console.log('error');
    }
  } else if (city === 'Plovdiv') {
    if (sells >= 0 && sells <= 500) {
      revenue = sells * 0.055;
    } else if (sells > 500 && sells <= 1000) {
      revenue = sells * 0.08;
    } else if (sells > 1000 && sells <= 10000) {
      revenue = sells * 0.12;
    } else if (sells > 10000) {
      revenue = sells * 0.145;
    } else {
      console.log('error');
    }
  } else {
    console.log('error');
  }

  if (revenue > 0) {
    console.log(revenue.toFixed(2));
  }
}

tradeCommissions('Sofia', '1500');
tradeCommissions('Plovdiv', '499.99');
tradeCommissions('Varna', '3874.50');
tradeCommissions('Kaspichan', '-50');
