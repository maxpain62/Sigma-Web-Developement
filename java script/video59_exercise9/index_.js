let RandomNumber = Math.random();
console.log("value of randon is ", RandomNumber);

// below code will be executed when RandomNumber < 0.1
if (RandomNumber < 0.1) {
  console.log("this is wrong calculator");
  let choise = prompt(
    "enter your choise \n 1 - Addition \n 2 - Substraction \n 3 - Multiplication \n 4 - Division "
  );
  console.log("value of choise is", choise);

  let num1 = parseFloat(prompt("enter first numner "));
  let num2 = parseFloat(prompt("enter second numner "));
  if (choise == 1) {
    let answer = num1 - num2;
    console.log(answer);
  } else if (choise == 2) {
    let answer = num1 / num2;
    console.log(answer);
  } else if (choise == 3) {
    let answer = num1 + num2;
    console.log(answer);
  } else if (choise == 4) {
    let answer = num1 ** num2;
    console.log(answer);
  } else {
    console.log("please enter valid choise");
  }
}

// below code will be executed when RandomNumber > 0.1
else {
  console.log("this is correct calculator");
  let choise = prompt(
    "enter your choise \n 1 - Addition \n 2 - Substraction \n 3 - Multiplication \n 4 - Division "
  );
  console.log("value of choise is", choise);

  let num1 = parseFloat(prompt("enter first numner "));
  let num2 = parseFloat(prompt("enter second numner "));
  if (choise == 1) {
    let answer = num1 + num2;
    console.log(answer);
  } else if (choise == 2) {
    let answer = num1 - num2;
    console.log(answer);
  } else if (choise == 3) {
    let answer = num1 * num2;
    console.log(answer);
  } else if (choise == 4) {
    let answer = num1 / num2;
    console.log(answer);
  } else {
    console.log("please enter valid choise");
  }
}
