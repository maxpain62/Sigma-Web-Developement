// let messages = {
//   1: "Initializing hacking...",
//   2: "Reading your files",
//   3: "password files detected",
//   4: "Sending all password and personal files to server",
//   5: "Cleaning up",
// };

// async function getMessageFunction() {
//   return new Promise((resolve, ms) => {});
// }

// async function displayMessageFunction() {
//   getMessageFunction();
// }

async function getMessageFunction() {
  let messages = {
    1: "Initializing hacking...",
    2: "Reading your files...",
    3: "Password files detected...",
    4: "Sending all passwords and personal files to server...",
    5: "Cleaning up...",
  };

  for (index = 1; index <= 5; index++) {
    console.log(messages[index]);
  }
}

async function displayData() {
  let data = await getMessageFunction();
  console.log(data);
}

displayData();
