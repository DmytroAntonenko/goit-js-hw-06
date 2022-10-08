function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonCreateRef = document.querySelector('[data-create]');

const buttonDestroyRef = document.querySelector('[data-destroy]');

const divBoxesRef = document.querySelector('#boxes');

const divControls = document.querySelector('#controls');

const amountRef = document.querySelector('input');



buttonCreateRef.addEventListener('click', createBoxes);

amountRef.addEventListener('input', () => {});



function createBoxes(amount) {
  divBoxesRef.innerHTML = '';
  amount = Number(amountRef.value);
  for (let i = 0; i < amount; i += 1) {
  const newBox = document.createElement('div');
  newBox.style.width = String(30 + 10 * i) + 'px';
  newBox.style.height = String(30 + 10 * i) + 'px';
  newBox.style.marginTop = '10px';
  newBox.style.backgroundColor = getRandomHexColor();
  divBoxesRef.append(newBox);
  }
  
}

buttonDestroyRef.addEventListener('click', removeNewBoxOnClick);

function removeNewBoxOnClick() {
  divBoxesRef.innerHTML = '';
}


