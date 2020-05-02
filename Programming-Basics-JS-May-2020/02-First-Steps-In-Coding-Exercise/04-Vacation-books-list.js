function vacationBookList(bookPages, pagesPerHour, daysToRead) {
  bookPages = +bookPages;
  pagesPerHour = +pagesPerHour;
  daysToRead = +daysToRead;
  const totalHours = bookPages / pagesPerHour;
  const howMuchToRead = totalHours / daysToRead;
  console.log(howMuchToRead);
}

vacationBookList('212', '20', '2');
vacationBookList('432', '15', '4');
