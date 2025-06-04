/*let promise1 = new Promise((resolve, reject) => {
  resolve(0);
});*/

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(0);
  }, 5000);
});

promise1.then((value) => {
  console.log(value);
});
