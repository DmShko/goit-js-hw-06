"use strict";

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// create new li-element and add to "elementLiArr"
const result = ingredients.map(element => {
  const newElement = document.createElement("li");
  newElement.textContent = element;
  newElement.classList.add("item");
  return newElement;
})

// insert elements of "elementLiArr" to "ingredients" as children
document.querySelector("#ingredients").append(...result);