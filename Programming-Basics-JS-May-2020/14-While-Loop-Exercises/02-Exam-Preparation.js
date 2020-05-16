function examPreparation(params) {
  let goodGrades = 0;
  let badGrades = 0;
  let sumOfGrades = 0;
  let lastProblem = '';
  const allowedBadGrades = Number(params.shift());
  let problem = params.shift();
  let grade = Number(params.shift());
  while (badGrades < allowedBadGrades) {
    if (grade <= 4) {
      badGrades++;
    }
    if (problem == 'Enough') {
      break;
    }

    goodGrades++;
    lastProblem = problem;
    sumOfGrades += Number(grade);

    problem = params.shift();
    grade = Number(params.shift());
  }

  if (badGrades < allowedBadGrades) {
    console.log(`Average score: ${(sumOfGrades / goodGrades).toFixed(2)}`);
    console.log(`Number of problems: ${goodGrades}`);
    console.log(`Last problem: ${lastProblem}`);
  } else {
    console.log(`You need a break, ${badGrades} poor grades.`);
  }
}

examPreparation(['3', 'Money', '6', 'Story', '4', 'Spring Time', '5', 'Bus', '6', 'Enough']);
examPreparation(['2', 'Income', '3', 'Game Info', '6', 'Best Player', '4']);
examPreparation(['4', 'Stone Age', '5', 'Freedom', '5', 'Storage', '3', 'Enough']);
