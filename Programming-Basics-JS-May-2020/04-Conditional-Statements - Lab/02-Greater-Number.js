function greaterNumber(firstNumber, secondNumber) {
  firstNumber > secondNumber
    ? console.log(+firstNumber)
    : console.log(+secondNumber);
}

greaterNumber('5', '3');
greaterNumber('3', '5');
greaterNumber('10', '10');
greaterNumber('-5', '5');
