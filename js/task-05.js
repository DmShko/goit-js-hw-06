"use strict";

// get input node link
const elementArr = {
    inputElement: document.querySelector('#name-input'),
    outElement: document.querySelector('#name-output'),  
};

// add event "input" of input node
elementArr.inputElement.addEventListener('input', changeSpanInner);

// interrupt handler
function changeSpanInner() {
    elementArr.outElement.textContent = elementArr.inputElement.value;
    if(elementArr.inputElement.value === "" || 
    elementArr.inputElement.value.split("").every(element => element === " ") === true) 
        elementArr.outElement.textContent = "Anonymous";
}   