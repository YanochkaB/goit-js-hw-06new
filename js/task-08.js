const registerForm = document.querySelector('.login-form')
registerForm.addEventListener('submit', formSubmit)

function formSubmit(evt) {
    evt.preventDefault();
    
    const form = evt.target
    const email = form.elements.email.value
    const password = form.elements.password.value

    if ((email === '') || (password === '') ) {
    const alertNotSubmit = 'Всі поля повинні бути заповнені!'
        alert(alertNotSubmit);
    } else {
        saveInformOfUser(email, password);
    }
    
    
}

function saveInformOfUser(email, password) {
    const informOfUser = {
        email, password,
    }
    console.log(informOfUser)
}