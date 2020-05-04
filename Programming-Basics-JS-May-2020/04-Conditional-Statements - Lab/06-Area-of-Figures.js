function areaOfFigures(type, sideOne, sideTwo) {
  if (type === 'square') {
    console.log((sideOne ** 2).toFixed(3));
  } else if (type === 'rectangle') {
    console.log((sideOne * sideTwo).toFixed(3));
  } else if (type === 'circle') {
    console.log((sideOne ** 2 * Math.PI).toFixed(3));
  } else if (type === 'triangle') {
    console.log(((sideOne * sideTwo) / 2).toFixed(3));
  }
}

areaOfFigures('square', '5');
areaOfFigures('rectangle', '7', '2.5');
areaOfFigures('circle', '6');
areaOfFigures('triangle', '4.5', '20');
