function password(params) {
  const username = params.shift();
  const password = params.shift();
  let data = params.shift();

  while (data !== password) {
    data = params.shift();
  }
  console.log(`Welcome ${username}!`);
}

password(['Nakov', '1234', 'Pass', '1324', '1234']);
password(['Gosho', 'secret', 'secret']);
