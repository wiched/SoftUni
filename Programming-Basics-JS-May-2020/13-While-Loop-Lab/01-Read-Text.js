function readText(params) {
  let name = params.shift();

  while (name !== 'Stop') {
    console.log(name);
    name = params.shift();
  }
}

readText(['Nakov', 'SoftUni', 'Sofia', 'Bulgaria', 'SomeText', 'Stop', 'AfterStop', 'Europe', 'HelloWorld']);
readText(['Sofia', 'Berlin', 'Moscow', 'Athens', 'Madrid', 'London', 'Paris', 'Stop']);
