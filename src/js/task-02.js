const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

  for (const ingredient of ingredients) {
    const productEl = document.createElement("li");
    productEl.classList.add('item');
    productEl.textContent = ingredient ;
    console.log(productEl);
    const ingredientsContainerEl = document.querySelector("#ingredients");
    ingredientsContainerEl.append(productEl);
  }

  
