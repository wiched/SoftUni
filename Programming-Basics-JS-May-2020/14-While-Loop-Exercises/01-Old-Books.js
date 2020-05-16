function oldBooks(params) {
  const searchBook = params.shift();
  let currentBook = params.shift();
  let counter = 0;
  while (true) {
    if (currentBook == searchBook) {
      console.log(`You checked ${counter} books and found it.`);
      break;
    }
    if (currentBook == 'No More Books') {
      console.log('The book you search is not here!');
      console.log(`You checked ${counter} books.`);
      break;
    }
    counter++;
    currentBook = params.shift();
  }
}

// oldBooks(['Troy', 'Stronger', 'Life Style', 'Troy']);
// oldBooks(['The Spot', 'Hunger Games', 'Harry Potter', 'Torronto', 'Spotify', 'No More Books']);
oldBooks(['Bourne', 'True Story', 'Forever', 'More Space', 'The Girl', 'Spaceship', 'Strongest', 'Profit', 'Tripple', 'Stella', 'The Matrix', 'Bourne']);
