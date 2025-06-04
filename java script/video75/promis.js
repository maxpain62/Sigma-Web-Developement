let promise1 = new Promise((resolve, reject) => {
  if (true) {
    resolve("value is true");
  } else {
    reject("value is false");
  }
});

//as we have set false value in in condition reject string will be displayed
let promise2 = new Promise((resolve, reject) => {
  if (false) {
    resolve("value is true");
  } else {
    reject("value is false");
  }
});

promise1
  .catch((err) => console.log("Promise1 Error:", err))

  .then((value) => {
    console.log(value);
    return promise2;
  })

  .then((value) => {
    console.log(value);
  })
  .catch((err) => console.log(err));
