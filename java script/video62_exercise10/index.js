//Below code will generate random number between 1-3
//function randomIntFromInterval(min, max) {
// min and max included
//  return Math.floor(Math.random() * (max - min + 1) + min);
//}

//Below code is if else shorthand
//This will return value based on value of variable "AdjectiveInt"
function Adjective() {
  const AdjectiveInt = Math.floor(Math.random() * (3 - 1 + 1) + 1);

  let Adjective1 = "Crazy";
  let Adjective2 = "Amazing";
  let Adjective3 = "Fire";
  return AdjectiveInt == 1
    ? Adjective1
    : AdjectiveInt == 2
    ? Adjective2
    : Adjective3;
}
function ShopName() {
  const ShopNameInt = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  let ShopName1 = "Engine";
  let ShopName2 = "Foods";
  let ShopName3 = "Garments";
  return ShopNameInt == 1
    ? ShopName1
    : ShopNameInt == 2
    ? ShopName2
    : ShopName3;
}

function AnotherWord() {
  const AnotherWordInt = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  let AnotherWord1 = "Bros";
  let AnotherWord2 = "Limited";
  let AnotherWord3 = "Hub";

  return AnotherWordInt == 1
    ? AnotherWord1
    : AnotherWordInt == 2
    ? AnotherWord2
    : AnotherWord3;
}

var Answer = Adjective();
console.log(Adjective(), ShopName(), AnotherWord());
