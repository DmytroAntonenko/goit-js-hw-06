const form = document.querySelector(".login-form");

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    const formData = {
        email,
        password,
    }
    console.log(formData)
    
    if (email === '' || password === '') {
    alert('Пожалуйста, заполните все поля ввода.');
    } 
   event.currentTarget.reset();
};
