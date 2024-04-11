const fontSizeControl = document.querySelector("#font-size-control")
const text = document.querySelector("#text")

const  textSize = () => {
    let size = fontSizeControl.value
    text.style.fontSize = size + "px"
}

fontSizeControl.addEventListener('input', textSize)
