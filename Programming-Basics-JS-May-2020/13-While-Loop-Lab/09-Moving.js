function moving(params) {
  const width = +params.shift();
  const length = +params.shift();
  const height = +params.shift();
  let boxes = params.shift();
  let boxTotal = 0;
  let room = 0;
  while (boxes !== 'Done') {
    room = width * length * height;
    boxTotal += +boxes;
    boxes = params.shift();
    if (boxTotal > room) {
      const diff = boxTotal - room;
      console.log(`No more free space! You need ${diff} Cubic meters more.`);
      break;
    }
  }

  if (room >= boxTotal) {
    const diff = room - boxTotal;
    console.log(`${diff} Cubic meters left.`);
  }
}

moving(['10', '10', '2', '20', '20', '20', '20', '122']);
moving(['10', '1', '2', '4', '6', 'Done']);
