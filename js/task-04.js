//Створи змінну counterValue, в якій буде зберігатися поточне
//значення лічильника та ініціалізуй її значенням 0.

//Додай слухачів кліків до кнопок, всередині яких збільшуй або
//зменшуй значення лічильника.

//Оновлюй інтерфейс новим значенням змінної counterValue.


//значення числа яке має змінюватись
let counterValue = Number(document.querySelector('#value').textContent)

//змінна значення якої змінюємо
let number = document.querySelector("#value");

const btnDec = document.querySelector('button[data-action="decrement"]');
const btnInc = document.querySelector('button[data-action="increment"]');

//колбек ф-ція на збільшення числа
const increaseClick = () => {
    counterValue += 1;
    number.innerHTML = counterValue
}

//колбек ф-ція на зменшення числа
const reduseClick = () => {
    counterValue -= 1
    number.innerHTML = counterValue
}

btnDec.addEventListener("click", reduseClick);
btnInc.addEventListener('click', increaseClick);