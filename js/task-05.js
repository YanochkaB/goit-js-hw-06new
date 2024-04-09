
//Напиши скрипт, який під час набору тексту
//в інпуті input#name - input(подія input),
//підставляє його поточне значення в span#name - output.

//Якщо інпут порожній, у спані повинен відображатися
// рядок "Anonymous".


const inputText = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");

const inputPrint = (evt) => {
    userName.textContent = evt.currentTarget.value
}

inputText.addEventListener("input", inputPrint);