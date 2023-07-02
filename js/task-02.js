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
const resault = ingredients.map(element => {
  let newElement = document.createElement("li");
  newElement.textContent = element;
  newElement.classList.add("item");
  elementLiArr.push(newElement);
})

// insert elements of "elementLiArr" to "ingredients" as children
document.querySelector("#ingredients").append(...elementLiArr);