function newfunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("this promise is inside a function");
      console.log("success");
    }, 2000);
  });
}
console.log("this is step 1");
console.log("this is step 2");

newfunction().then((value) => {
  console.log(value);
});
