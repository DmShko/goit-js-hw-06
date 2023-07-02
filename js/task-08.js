const objSet = {
    subEvent: document.querySelector('[type="submit"]'),
    accessArr: {},
    formElement: document.querySelector('.login-form'),
} 

// universal function that add event
function addEvent (action, element, name) {
    element.addEventListener(action, name);
}

// find "input" element and check if he empty
function checkElement() {
    return Array.from(objSet.formElement.elements).some(element => 
        element.nodeName  === 'INPUT' && element.value.length === 0 
    );
}

// main operations
function processor() {
  
    for(let i = 0; i < objSet.formElement.elements.length; i += 1) {
        let curentElement = objSet.formElement.elements[i];
        if(curentElement.nodeName  === 'INPUT') 
        objSet.accessArr[curentElement.name] = curentElement.value;    
    }
    objSet.formElement.reset();
    console.log(objSet.accessArr);
}

// add event to form
addEvent('click', objSet.formElement, formEventItter);

function formEventItter(e){
    e.preventDefault();
    if(e.target.getAttribute('type') === 'submit') {
        if(checkElement()) {
            alert("All 'input' fills must be filled!");
            return;
        }
        processor();
    }
}