const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector("ul#ingredients");

// ingredients.forEach(ingredients)
const markup =  ingredients.map((element) => {
  const ingredient = document.createElement("li");
  ingredient.classList.add("item");
  ingredient.textContent = element;
  return ingredient;

})

 
ingredientsListEl.append(...markup);