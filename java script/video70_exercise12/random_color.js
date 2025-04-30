function RandomBackgroundColor() {
  let val1 = Math.ceil(0 + Math.random() * 150);
  let val2 = Math.ceil(0 + Math.random() * 250);
  let val3 = Math.ceil(0 + Math.random() * 350);
  return `rgb(${val1},${val2},${val3})`;
}

let boxes = document.getElementsByClassName("box");
console.log(boxes);

Array.from(boxes).forEach((e) => {
  e.style.backgroundColor = RandomBackgroundColor();
  e.style.color = RandomBackgroundColor();
});
