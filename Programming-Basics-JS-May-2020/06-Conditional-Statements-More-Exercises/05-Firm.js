function firm(hoursNeeded, days, employees) {
  const workingHours = (days - days * 0.1) * 8;
  const employeesExtra = employees * 2 * days;
  const totalHours = Math.floor(workingHours + employeesExtra);
  if (totalHours >= hoursNeeded) {
    const diff = totalHours - hoursNeeded;
    console.log(`Yes!${diff} hours left.`);
  } else {
    const diff = hoursNeeded - totalHours;
    console.log(`Not enough time!${diff} hours needed.`);
  }
}

firm('90', '7', '3');
firm('99', '3', '1');
