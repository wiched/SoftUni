function histogram(params) {
  const howMany = params.shift();
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;
  for (let i = 0; i < params.length; i++) {
    if (params[i] < 200) {
      p1++;
    } else if (params[i] >= 200 && params[i] <= 399) {
      p2++;
    } else if (params[i] >= 400 && params[i] <= 599) {
      p3++;
    } else if (params[i] >= 600 && params[i] <= 799) {
      p4++;
    } else {
      p5++;
    }
  }
  p1 = ((p1 / howMany) * 100).toFixed(2);
  p2 = ((p2 / howMany) * 100).toFixed(2);
  p3 = ((p3 / howMany) * 100).toFixed(2);
  p4 = ((p4 / howMany) * 100).toFixed(2);
  p5 = ((p5 / howMany) * 100).toFixed(2);
  console.log(`${p1}%`);
  console.log(`${p2}%`);
  console.log(`${p3}%`);
  console.log(`${p4}%`);
  console.log(`${p5}%`);
}

histogram(['3', '1', '2', '999']);
histogram(['7', '800', '801', '250', '199', '399', '599', '799']);
histogram(['9', '367', '99', '200', '799', '999', '333', '555', '111', '9']);
histogram(['14', '53', '7', '56', '180', '450', '920', '12', '7', '150', '250', '680', '2', '600', '200']);
