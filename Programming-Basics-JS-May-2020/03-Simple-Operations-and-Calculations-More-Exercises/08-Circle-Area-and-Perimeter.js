function circleAreaAndPerimeter(radius) {
  const area = Math.PI * radius * radius;
  console.log(area.toFixed(2));
  const perimeter = 2 * Math.PI * radius;
  console.log(perimeter.toFixed(2));
}

circleAreaAndPerimeter('3');
circleAreaAndPerimeter('4.5');
