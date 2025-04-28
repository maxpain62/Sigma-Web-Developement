let a = [1, 2, 3, 4, 5];
console.log("original value of array a is : ", a);
console.log("Length of array is : ", a.length);
console.log(
  "applied join function of array a with string 'and': ",
  a.join(" and ")
);
a.pop();
console.log("value of array a after applying pop method", a);
console.log("value of array a[4] after applying pop method", a[4]);
a.shift();
console.log("value of array a after applying shift method", a);
a.push("Gaurav");
console.log("value of array a after applying push method", a);
a.unshift(1);
console.log("value of array a after applying unshift method", a);

let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = a1.concat(a2);
console.log(
  "\nvalue of a3 after using concat method on array a1 and a2 is : ",
  a3,
  "\ndata type of a3 is : ",
  typeof a3
);

let a4 = [6, 9, 7, 5, 1, 4, 3, 2, 10, 20];
console.log("value of array a4 is : ", a4);
console.log("value of a4 after applying sort : ", a4.sort());

let a5 = [1, 2, 3, 4, 5, 6];
console.log("original value of array a5 is : ", a5);
//splice 1st number define index number
// 2nd number define how many element to replace
// values at end define actual value to be replaced with
a5.splice(1, 2, 222, 333);
console.log("value of a5 after using splice function is : ", a5);
let a6 = [1, 2, 3, 4, 5, 6];
console.log("\noriginal value of array a5 is : ", a6);
a6.splice(2, 1, 88, 99);
console.log("value of a5 after using splice function is : ", a6);

let a7 = [1, 99, 3, 4, 88];
for (let index = 0; index < a7.length; index++) {
  const element = a7[index];
  console.log(element);
}
