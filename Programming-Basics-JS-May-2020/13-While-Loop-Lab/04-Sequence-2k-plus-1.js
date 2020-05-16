function sequence2KPlus1(params) {
  const cap = params.shift();
  let counter = 1;
  while (counter <= cap) {
    console.log(counter);
    counter = counter * 2 + 1;
  }
}

sequence2KPlus1(['3']);
sequence2KPlus1(['8']);
sequence2KPlus1(['17']);
sequence2KPlus1(['31']);
