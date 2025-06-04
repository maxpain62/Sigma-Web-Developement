function add(a, b) {
  return a + b;
}
function substract(a, b) {
  return a - b;
}
function displayResult(x, y, opration1) {
  return opration1(x, y);
}
console.log(displayResult(1, 2, add));
// another example

function casual(name) {
  return "Hey " + name + "!";
}

function formal(name) {
  return "Good evening, " + name + ".";
}

function greet(name, greetingFunction) {
  return greetingFunction(name);
}

console.log(greet("Gaurav", casual));
console.log(greet("Viraj", formal));

// Try greet("Alex", casual);  // "Hey Alex!"
// Try greet("Alex", formal);  // "Good evening, Alex."
