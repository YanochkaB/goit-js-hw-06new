function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonCreate = document.querySelector('button[data-create]')
const buttonDestroy = document.querySelector("button[data-destroy]");
const divForBoxes = document.querySelector('#boxes')
const inputForNumber = document.querySelector('#controls>input')

//ф-ція для створення елементів в div#boxes

//скільки вказано в amount і додає їх у div#boxes.
//Розміри найпершого <div> - 30px на 30px.
//Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
//Всі елементи повинні мати випадковий колір фону у форматі HEX. 
//Використовуй готову функцію getRandomHexColor для отримання кольору.
const  createBoxes = amount => {
  const allDiv = [];

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div')
    div.style.width = `${30 + 10 * i}px`;
    div.style.height = `${30 + 10 * i}px`;
    div.style.background = getRandomHexColor();
    allDiv.push(div)
  };

  return allDiv;
}

//ф-ція для видалення створених елементів
const destroyBoxes = () => {
  divForBoxes.innerHTML = ''
  inputForNumber.value = ''
}

buttonCreate.addEventListener('click', () => {
  let boxis = createBoxes(inputForNumber.value)
  divForBoxes.append(...boxis)
})

buttonDestroy.addEventListener('click', destroyBoxes)