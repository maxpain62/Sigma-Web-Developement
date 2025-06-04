async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("this is async function");
    }, 3000);
  });
}

async function displayData() {
  console.log("this is step 1");
  console.log("this is step 2");
  let data = await getData();
  console.log(data);
  console.log("this is after getdata function call ");
}

displayData();
