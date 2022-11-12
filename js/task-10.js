function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const numberInput = document.querySelector('#controls').firstElementChild
const createBtn = document.querySelector('[data-create]')
const destroyBtn = document.querySelector('[data-destroy]')
const boxes = document.querySelector('#boxes')

console.log(destroyBtn)

createBtn.addEventListener('click', onCreateHandler)
destroyBtn.addEventListener('click', onDestroyHandler)

function createBoxes(amount) {
  let collection = ''

  for (let i = 0; i < amount; i++) {
    const box = {
      width: '',
      height: '',
      backgroundColor: ''
    }

    box.backgroundColor = getRandomHexColor()
    if (i === 0) {
      box.height = '30px'
      box.width = '30px'
    } else {
      box.height = (30 + i * 10) + 'px'
      box.width = (30 + i * 10) + 'px'
    }

    collection += `<div style="width: ${box.width}; height: ${box.height}; background-color: ${box.backgroundColor}"></div>`

    console.log(collection)
  }

  boxes.insertAdjacentHTML('beforeend', collection)
}

function onCreateHandler(e) {
  console.log(numberInput.value)
  if (!numberInput.value) {
    alert('choose a number')
  } else {
    createBoxes(Number(numberInput.value))
  }
}

function onDestroyHandler(e) {
  boxes.innerHTML = ''
  numberInput.value = ''
}
