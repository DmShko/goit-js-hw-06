"use strict";

// find all element with selector "item and output"
const parentsElement = document.querySelectorAll(".item");
console.log(`Number of categories: ${parentsElement.length}`);
console.log(" ");

// "item"-element array search, output H2 text, output "item"-element last element number of children 
parentsElement.forEach((element, index) => {
    console.log(`Title ${index + 1}: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
    console.log(" ");
});