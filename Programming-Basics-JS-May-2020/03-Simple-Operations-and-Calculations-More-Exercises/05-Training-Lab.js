function trainingLab(w, h) {
  widthInCm = w * 100;
  heightInCm = h * 100;
  const heightWithoutHallway = heightInCm - 100;
  const deskPerRow = Math.floor(heightWithoutHallway / 70);
  const rows = Math.floor(widthInCm / 120);
  const placesToSit = deskPerRow * rows - 3;
  console.log(placesToSit);
}

trainingLab('15', '8.9');
trainingLab('8.4', '5.2');
