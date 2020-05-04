function sumSeconds(firstSecs, secondSecs, thirdSecs) {
  const totalTime = +firstSecs + +secondSecs + +thirdSecs;
  const minutes = Math.trunc(totalTime / 60);
  const seconds = totalTime % 60;
  if (seconds < 10) {
    console.log(`${minutes}:0${seconds}`);
  } else {
    console.log(`${minutes}:${seconds}`);
  }
}

sumSeconds('35', '45', '44');
sumSeconds('22', '7', '34');
sumSeconds('50', '50', '49');
sumSeconds('14', '12', '10');
