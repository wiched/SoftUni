function cinemaTickets(params) {
  let movieName = params.shift();
  let student = 0;
  let kid = 0;
  let standard = 0;

  while (movieName !== 'Finish') {
    let full = 0;
    const freeSeats = +params.shift();
    let ticketType = params.shift();

    while (ticketType !== 'End') {
      if (ticketType == 'student') {
        student++;
        full++;
      } else if (ticketType == 'kid') {
        kid++;
        full++;
      } else if (ticketType == 'standard') {
        standard++;
        full++;
      }
      if (full >= freeSeats) {
        break;
      }
      ticketType = params.shift();
    }
    const moviePercentage = (full / freeSeats) * 100;

    console.log(`${movieName} - ${moviePercentage.toFixed(2)}% full.`);
    movieName = params.shift();
  }
  const totalTickets = student + kid + standard;
  console.log(`Total tickets: ${totalTickets}`);
  const studentPercentage = (student / totalTickets) * 100;
  const kidPercentage = (kid / totalTickets) * 100;
  const standardPercentage = (standard / totalTickets) * 100;
  console.log(`${studentPercentage.toFixed(2)}% student tickets.`);
  console.log(`${standardPercentage.toFixed(2)}% standard tickets.`);
  console.log(`${kidPercentage.toFixed(2)}% kids tickets.`);
}

// cinemaTickets(['Taxi', '10', 'standard', 'kid', 'student', 'student', 'standard', 'standard', 'End', 'Scary Movie', '6', 'student', 'student', 'student', 'student', 'student', 'student', 'Finish']);
cinemaTickets(['The Matrix', '20', 'student', 'standard', 'kid', 'kid', 'student', 'student', 'standard', 'student', 'End', 'The Green Mile', '17', 'student', 'standard', 'standard', 'student', 'standard', 'student', 'End', 'Amadeus', '3', 'standard', 'standard', 'standard', 'Finish']);
