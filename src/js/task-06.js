const input = document.querySelector('#validation-input');

input.addEventListener ('blur', OnInputBlur);

function OnInputBlur(event) {
    if (Number(input.dataset.length) !== event.currentTarget.value.length) {
        input.classList.add('invalid');     
    }
    else {
        input.classList.remove(`invalid`);
        input.classList.add('valid');
    };
};


