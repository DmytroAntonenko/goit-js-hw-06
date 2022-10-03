const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsContainerEl = document.querySelector("#ingredients");
const newArray = [];

ingredients.map(ingredient => {
    const productEl = document.createElement("li");
    productEl.classList.add('item');
    productEl.textContent = ingredient;
    newArray.push(productEl);
  });

  ingredientsContainerEl.append(...newArray);
  