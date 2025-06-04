function hello(callback) {
  console.log("hello");
  callback();
}
function world() {
  console.log("world");
}
hello(world);

//another callback example

function sum(callback, a, b) {
  let result = a + b;
  callback(result);
}

function displayResult(result) {
  console.log(result);
}

sum(displayResult, 1, 3);

//another example of callback
//declaring 3 functions
function step1(callback) {
  setTimeout(() => {
    console.log("this is step 1");
    callback();
  }, 2500);
}
function step2(callback) {
  setTimeout(() => {
    console.log("this is step 2");
    callback();
  }, 2500);
}
function step3() {
  setTimeout(() => {
    console.log("this is step 3");
    //callback();
  }, 2500);
}

//now calling back functions in any desired sequence
step1(() => {
  step2(() => {
    step3(() => {
      console.log("step3 is completed");
    });
  });
});
