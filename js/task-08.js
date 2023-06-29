const objSet = {
    subEvent: document.querySelector('[type="submit"]'),
    accessArr: {},
    formElement: document.querySelector('.login-form'),
} 

// universal function that add event
function addEvent (action, element, name) {
    element.addEventListener(action, name);
}

function checkElement() {
    for(let i = 0; i < objSet.formElement.elements.length; i += 1) {
        // console.log(objSet.formElement.elements[i]);
        let curentElement = objSet.formElement.elements[i];
        if(curentElement.nodeName  === 'INPUT' && curentElement.value.length === 0) 
            return true;
    }
    // console.log(objSet.formElement.elements.namedItem("email").value);
    // return objSet.formElement.elements.every(element => element.tagName === 'input');
}

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
    // console.log(objSet.inputElements);
    if(e.target.getAttribute('type') === 'submit') {
        if(checkElement()) {
            alert("All 'input' fills must be filled!");
            return;
        }
        processor();
    }

}