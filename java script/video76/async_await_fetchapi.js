async function getData() {
  // Simulate getting data from a server
  let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(x);
  let data = await x.json();
  console.log(data);
  return data;
}

getData();
