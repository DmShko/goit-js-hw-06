"user strict"

const eventArr = {
   inputElement: document.querySelector('#font-size-control'),
   spanElement: document.querySelector('#text'),
   minSize: document.querySelector('[min]'),
   maxSize: document.querySelector('[max]'),
};

eventArr.spanElement.style.fontSize = `${eventArr.inputElement.value}px`;

eventArr.inputElement.addEventListener("input", (e) => {
    eventArr.spanElement.style.fontSize = `${e.target.value}px`;
});
