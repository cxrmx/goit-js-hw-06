const input = document.querySelector('#font-size-control')
const text = document.querySelector('#text')

function inputHandler(e) {
    text.style.fontSize = e.currentTarget.value + 'px'
}

input.addEventListener("input", inputHandler)
