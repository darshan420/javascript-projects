/*
red green blue  => 0 to 255 possible shades of red green blue
rgb = > 100% red , 100% green , 100% blue => white
        255        255             255       

rgb => 0% red, 0% green, 0% blue = > black
        0          0        0        
 */
const btnChangeColor = document.querySelector(".btn-color-change");
const color = document.querySelector('.color')
const body = document.querySelector('body');

const randomColor = () => {
    let r = Math.floor(Math.random() * 256);  // return number from 0 to 255
    let g = Math.floor(Math.random() * 256);  // return number from 0 to 255
    let b = Math.floor(Math.random() * 256);  // return number from 0 to 255

    return `rgb(${r}, ${g}, ${b})`
}
btnChangeColor.addEventListener('click', () => {
    body.style.backgroundColor = randomColor()
    color.style.color = body.style.backgroundColor;
    color.textContent = body.style.backgroundColor ;   
})