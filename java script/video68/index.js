document.querySelectorAll(".box").forEach((e) => {
  e.style.backgroundColor = "green";
});

document.querySelectorAll(".box2").forEach((e2) => {
  e2.style.backgroundColor = "yellow";
});

let forloopbox = document.getElementsByClassName("box3");
for (i = 0; i < forloopbox.length; i++) {
  forloopbox[i].style.backgroundColor = "black";
  forloopbox[i].style.color = "white";
}

let IndividualElement = document.getElementsByClassName("individualbox");
console.log(IndividualElement);
IndividualElement[1].style.backgroundColor = "purple";

IndividualElement[0].style.color = "blue";
