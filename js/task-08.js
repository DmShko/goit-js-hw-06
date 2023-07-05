const objSet = {
    subEvent: document.querySelector('[type="submit"]'),
    formElement: document.querySelector('.login-form'),
} 

// universal function that add event
// function addEvent (action, element, name) {
objSet.formElement.addEventListener('click', EventItter);
// }

// addEvent('click', objSet.subEvent, buttonEventItter);

function EventItter(e) {
    if(e.target.getAttribute('type') === 'submit') {
        e.preventDefault();
        const { elements: { email, password } } = objSet.formElement;
        
        if(email.value === "" || password.value === "")
            return alert("All 'input' fills must be filled!");
        else{ 
            const accessArr = {};
            accessArr.email=email.value;
            accessArr.password=password.value;
            objSet.formElement.reset();
            console.log(accessArr);
        }
    }
}