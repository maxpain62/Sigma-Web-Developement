let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  document.querySelector(".box").innerHTML = "I am clicked";
});

btn.addEventListener("contextmenu", () => {
  document.querySelector(".box").innerHTML = "right click on mouse";
});
