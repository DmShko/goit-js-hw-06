"use strict";

// get a reference to input element
const inputElement = document.querySelector('#validation-input');

inputElement.addEventListener('blur', inputCheck);

console.log(inputElement.getAttribute("data-length"));

function inputCheck() {
    if(inputElement.value.length === Number(inputElement.getAttribute("data-length"))) {
        inputElement.classList.add("valid");
        inputElement.classList.remove("invalid");
    }     
    else {
        inputElement.classList.add("invalid");
        inputElement.classList.remove("valid");
    }     
}