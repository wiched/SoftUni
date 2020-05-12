function salary(params) {
  const tabs = params.shift();
  let salary = params.shift();

  for (let i = 0; i < params.length; i++) {
    if (params[i] === 'Facebook') {
      salary -= 150;
    } else if (params[i] === 'Instagram') {
      salary -= 100;
    } else if (params[i] === 'Reddit') {
      salary -= 50;
    }
  }
  if (salary <= 0) {
    console.log('You have lost your salary.');
  } else {
    console.log(salary);
  }
}

salary(['10', '750', 'Facebook', 'Dev.bg', 'Instagram', 'Facebook', 'Reddit', 'Facebook', 'Facebook']);
salary(['3', '500', 'Github.com', 'Stackoverflow.com', 'softuni.bg']);
salary(['3', '500', 'Facebook', 'Stackoverflow.com', 'softuni.bg']);
