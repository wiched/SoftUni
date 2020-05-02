function fishTank(length, width, height, percentage) {
  length = +length;
  width = +width;
  height = +height;
  percentage = +percentage;
  const tankVolume = length * width * height;
  const totalLitres = tankVolume * 0.001;
  const convertToPercentage = percentage * 0.01;
  const litresNeeded = totalLitres * (1 - convertToPercentage);
  console.log(litresNeeded);
}

fishTank('85', '75', '47', '17');
fishTank('105', '77', '89', '18.5');
