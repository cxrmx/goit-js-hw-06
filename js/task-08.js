const form = document.querySelector('.login-form')

const handleSubmit = (e) => {
    e.preventDefault()

    const {
        elements: {email, password}
    } = e.currentTarget

    const formObject = {
        email: email.value,
        password: password.value
    }

    if (formObject.email === '' || formObject.password === '') {
        alert("All fields must be filled")
    } else {
        console.log(formObject)
    }
    e.currentTarget.reset()
}

form.addEventListener("submit", handleSubmit)
