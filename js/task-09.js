function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyElem = document.querySelector('body')
const buttonChangeColor = document.querySelector('.change-color')
const colorName = document.querySelector('.color')



const chengeColor = () => {
  let color = getRandomHexColor()
  
  bodyElem.style.background = color
  colorName.textContent = color
}

buttonChangeColor.addEventListener('click', chengeColor)
