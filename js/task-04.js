let counterValue = 0

const value = document.querySelector("#value")
value.textContent = counterValue

const increment = document.querySelector('[data-action="increment"]')

const decrement = document.querySelector('[data-action="decrement"]')

const incrementHandler = () => {
    counterValue += 1
    value.textContent = counterValue
}

const decrementHandler = () => {
    counterValue -= 1
    value.textContent = counterValue
}

increment.addEventListener("click", incrementHandler)

decrement.addEventListener("click", decrementHandler)
