function workingHours(hour, day) {
  switch (true) {
    case day === 'Monday' && hour >= 10 && hour < 18:
    case day === 'Tuesday' && hour >= 10 && hour < 18:
    case day === 'Wednesday' && hour >= 10 && hour < 18:
    case day === 'Thursday' && hour >= 10 && hour < 18:
    case day === 'Friday' && hour >= 10 && hour < 18:
    case day === 'Saturday' && hour >= 10 && hour < 18:
      console.log('open');
      break;
    case day === 'Sunday':
      console.log('closed');
      break;
    default:
      console.log('closed');
      break;
  }
}

workingHours('11', 'Monday');
workingHours('19', 'Friday');
workingHours('11', 'Sunday');
