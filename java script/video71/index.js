//query selector selects 1st element
let box1atrib = document.querySelector(".box1");
console.log(box1atrib);
console.log("innerHTML of class .box1 : ", box1atrib.innerHTML);
console.log("\nUsing innerText on class .box1 : ", box1atrib.innerText);

let containeratrib = document.querySelector(".container");
console.log(containeratrib);
console.log("Using innerHTML : ", containeratrib.innerHTML);
console.log("\nUsing innerText : ", containeratrib.innerText);

console.log(
  "\nUsing outerHTML on class .container : \n",
  containeratrib.outerHTML
);

console.log("Changing content : ");
//box1atrib.innerHTML = "changing content with innerHTML function";

console.log("Using hasAttribute : ", box1atrib.hasAttribute("style"));
console.log("Using getAttribute : ", box1atrib.getAttribute("style"));
box1atrib.setAttribute("style", "display: flex");

let boxchild1atrib = document.querySelector(".box1child1");
console.log(
  "checking any style is applied or not",
  boxchild1atrib.getAttribute("style")
);
boxchild1atrib.setAttribute("style", "display: grid");

//below code will insert div element
console.log("Inserting element with js");
let DivElement = document.createElement("div");
DivElement.setAttribute("class", "DivElement");
DivElement.innerHTML = "This line is inserted with js code";
document.querySelector(".container").append(DivElement);

//replacing element with new element
let OldElement = document.getElementById("oldBox");
let NewElement = document.createElement("div");
NewElement.setAttribute("class", "NewElement");
NewElement.textContent = "I am new box";
OldElement.replaceWith(NewElement);

//getElementsByClassName returns value in array format hence we should use [] to represent array index.
document.getElementsByClassName("box1child4")[0].remove();

console.log(document.querySelector(".container").classList);

document.querySelector(".container").classList.toggle("red");

document.querySelector(".container").classList.remove(".test1");
