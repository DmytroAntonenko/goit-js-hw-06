function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const body = document.querySelector('body');

const span = document.querySelector('.color');


body.addEventListener('click', changeBodyBackgroundColor);

function changeBodyBackgroundColor(event) {
body.style.backgroundColor = getRandomHexColor();
span.textContent = body.style.backgroundColor;

}