let counterValue = 0;

const buttonDecrement = document.querySelector('[data-decrement]');

const buttonIncrement = document.querySelector('[data-increment]');

const counter = document.querySelector('#value');


const handleClickDecrement = () => {
   counterValue += Number(buttonDecrement.textContent);
   counter.textContent = counterValue;
  }; 
buttonDecrement.addEventListener("click", handleClickDecrement);


const handleClickIncrement = () => {
  counterValue += Number(buttonIncrement.textContent);
  counter.textContent = counterValue;
  };
buttonIncrement.addEventListener("click", handleClickIncrement);