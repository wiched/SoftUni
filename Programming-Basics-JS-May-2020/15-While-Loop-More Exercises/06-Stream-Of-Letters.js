function streamOfLetters(params) {
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let c = false;
  let o = false;
  let n = false;
  let currentWord = '';
  let secret = '';
  while (true) {
    const currentLetter = params.shift();
    if (letters.includes(currentLetter)) {
      if (c && o && n) {
        secret += currentWord;
        secret += ' ';
        currentWord = '';
        c = false;
        o = false;
        n = false;
      }
      if (currentLetter === 'c' && c) {
        currentWord += currentLetter;
      } else if (currentLetter === 'o' && o) {
        currentWord += currentLetter;
      } else if (currentLetter === 'n' && n) {
        currentWord += currentLetter;
      }

      if (currentLetter != 'c' && currentLetter != 'o' && currentLetter != 'n') {
        currentWord += currentLetter;
      } else if (currentLetter === 'c' && !c) {
        c = true;
      } else if (currentLetter === 'o' && !o) {
        o = true;
      } else if (currentLetter === 'n' && !n) {
        n = true;
      }
    }
    if (c && o && n) {
      secret += currentWord;
      secret += ' ';
      currentWord = '';
      c = false;
      o = false;
      n = false;
    }
    if (currentLetter == 'End') {
      break;
    }
  }

  console.log(secret);
}

streamOfLetters(['H', 'n', 'e', 'l', 'l', 'o', 'o', 'c', 't', 'c', 'h', 'o', 'e', 'r', 'e', 'n', 'e', 'End']);
streamOfLetters(['%', '!', 'c', '^', 'B', '`', 'o', '%', 'o', 'o', 'M', ')', '{', 'n', '\\', 'A', 'D', 'End']);
streamOfLetters(['o', 'S', '%', 'o', 'l', '^', 'v', 'e', 'c', 'n', '&', 'm', 'e', 'c', 'o', 'n', 'End']);
