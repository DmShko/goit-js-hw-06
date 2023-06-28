"user strict"

const eventArr = {
   inputElement: document.querySelector('#font-size-control'),
   spanElement: document.querySelector('#text'),
   minSize: document.querySelector('[min]'),
   maxSize: document.querySelector('[max]'),
};

eventArr.inputElement.addEventListener("input", (e) => {
    eventArr.spanElement.style.fontSize = `${e.target.value}px`;
    console.log(e.target.value);
});
