function grades(params) {
  const students = +params.shift();
  let top = 0;
  let four = 0;
  let three = 0;
  let two = 0;
  let averageSum = 0;
  for (let i = 1; i <= students; i++) {
    grade = +params.shift();
    averageSum += grade;
    if (grade >= 2 && grade <= 2.99) {
      two++;
    } else if (grade >= 3 && grade <= 3.99) {
      three++;
    } else if (grade >= 4 && grade <= 4.99) {
      four++;
    } else {
      top++;
    }
  }
  const twoPercentage = (two / students) * 100;
  const threePercentage = (three / students) * 100;
  const fourPercentage = (four / students) * 100;
  const topPercentage = (top / students) * 100;
  const average = averageSum / students;
  console.log(`Top students: ${topPercentage.toFixed(2)}%`);
  console.log(`Between 4.00 and 4.99: ${fourPercentage.toFixed(2)}%`);
  console.log(`Between 3.00 and 3.99: ${threePercentage.toFixed(2)}%`);
  console.log(`Fail: ${twoPercentage.toFixed(2)}%`);
  console.log(`Average: ${average.toFixed(2)}`);
}

grades(['10', '3.00', '2.99', '5.68', '3.01', '4', '4', '6.00', '4.50', '2.44', '5']);
// grades(['6', '2', '3', '4', '5', '6', '2.2']);
