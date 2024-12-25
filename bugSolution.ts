function greeter(person: string) {
  return "Hello, " + person;
}

function greeterArray(people: string[]) {
  return people.map(person => "Hello, " + person);
}

let user = ["Jane User", "John Smith"];

console.log(greeter(user[0])); // Accessing the first element of the array
console.log(greeterArray(user)); // Using a function that accepts an array