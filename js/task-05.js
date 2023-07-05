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
    elementArr.outElement.textContent = elementArr.inputElement.value.trim() || "Anonymous";
}   