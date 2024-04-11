//  <input
 // type="text"
 // id="validation-input"
 // data-length="6"
 // placeholder="Please enter 6 symbols"
//  />

const inputText = document.querySelector("#validation-input")

function notFocus()  {
    if (Number(inputText.value.length) === Number(inputText.dataset.length)) {
        inputText.classList.remove("invalid");
        inputText.classList.add("valid");
    } else {
      inputText.classList.remove("valid");
      inputText.classList.add("invalid");
    }}


inputText.addEventListener("blur", notFocus);