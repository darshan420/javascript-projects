/*
Hex Numbers - 0 to 9 & "A" to "F"(10 - 15)
 - 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'
Hex color : #RRGGBB
RR (red), GG (green) and BB (blue) are hexadecimal integers between 00 and FF
 specifying the intensity of the color.

 highest value - ff
 lowest value - 00
*/

const btnChangeColor = document.querySelector(".btn-color-change");
const color = document.querySelector(".color");
const body = document.querySelector("body");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btnChangeColor.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[Math.floor(Math.random() * hex.length)];
  }
  body.style.backgroundColor = hexColor;
  color.textContent = color.style.color = hexColor;
});
