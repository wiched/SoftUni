function vowelsSum(word) {
  let count = 0;
  for (i = 0; i < word.length; i++) {
    const letter = word[i];
    switch (letter) {
      case 'a':
        count += 1;
        break;
      case 'e':
        count += 2;
        break;
      case 'i':
        count += 3;
        break;
      case 'o':
        count += 4;
        break;
      case 'u':
        count += 5;
        break;
    }
  }
  console.log(count);
}

vowelsSum('hello');
vowelsSum('hi');
vowelsSum('bamboo');
vowelsSum('beer');
