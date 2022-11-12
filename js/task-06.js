const input = document.querySelector("#validation-input")

const onBlurHandler = (e) => {
    console.log(input.value.length)
    if (input.value.length == input.dataset.length) {
        input.classList.remove("invalid")
        input.classList.add("valid")
    } else {
        input.classList.remove("valid")
        input.classList.add("invalid")
    }
}


input.addEventListener("blur", onBlurHandler)
