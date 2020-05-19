function building(params) {
  const floors = +params.shift();
  const rooms = +params.shift();
  const topFloor = true;
  for (let i = floors; i >= 1; i--) {
    let floor = '';
    for (let j = 0; j < rooms; j++) {
      if (i === floors) {
        floor += `L${i}${j} `;
      } else if (i % 2 === 0 && i !== floors) {
        floor += `O${i}${j} `;
      } else if (i % 2 !== 0) {
        floor += `A${i}${j} `;
      }
    }
    console.log(floor);
  }
}

building(['6', '4']);
building(['9', '5']);
building(['4', '4']);
