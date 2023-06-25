"use strict";

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// list of new li-element
let elementLiArr = [];
// create new li-element and add to "elementLiArr"
for(const element of ingredients) {
  let newElement = document.createElement("li");
  newElement.innerHTML = element;
  newElement.classList.add("item");
  elementLiArr.push(newElement);
}

// insert elements of "elementLiArr" to "ingredients" as children
document.querySelector("#ingredients").append(...elementLiArr);