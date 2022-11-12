function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const color = document.querySelector('.color')
const button = document.querySelector('.change-color')

const onClickHandler = () => {
  const randomColor = getRandomHexColor()

  document.body.style.backgroundColor = randomColor
  color.textContent = randomColor
}

button.addEventListener('click', onClickHandler)
