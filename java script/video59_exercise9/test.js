const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("What is your favorite color? ", (choise) => {
  console.log(`Your favorite color is: ${choise}`);
  readline.close();
});
