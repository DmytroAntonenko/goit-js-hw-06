const input = document.querySelector('#font-size-control');

const span = document.querySelector('#text');


input.addEventListener('input', changeFontsizeText);

function changeFontsizeText(event) {
    span.style.fontSize = input.value + 'px'; 
    console.log(event)
};