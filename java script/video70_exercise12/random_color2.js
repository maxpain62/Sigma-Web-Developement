let boxes = document.getElementsByClassName("box");

for (i = 0; i < boxes.length; i++) {
  randomnumber = "#" + Math.ceil(99 + Math.random() * 958412);
  randomnumber2 = "#" + Math.ceil(65 + Math.random() * 785423);
  console.log(randomnumber);
  boxes[i].style.backgroundColor = randomnumber;
  boxes[i].style.color = randomnumber2;
}
