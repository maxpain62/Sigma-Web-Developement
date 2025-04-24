// for (i = 2; i <= 20; i += 2) {
//   console.log("Value of i is : ", i);
// }

let StudentDetails = {
  FirstName: "Gaurav",
  LastName: "Bhatkar",
  Age: 35,
  Address: "Dombivli",
};

for (const key in StudentDetails) {
  const element = StudentDetails[key];
  console.log(key, element);
}

for (const a of "Gaurav") {
  console.log(a);
}
