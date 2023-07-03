function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elementLinkSet = {
  controlsElementLink: document.querySelector('#controls'),
  inputElementLink: document.querySelector('[type = "number"]'),
  outContainerLink: document.querySelector('#boxes'),
};

function createBoxes() {

let  countElements = Number(elementLinkSet.inputElementLink.value);

  if(0 < countElements && countElements <= 100) {
    for(let element = 0; element < countElements; element += 1) {
      let newElement = document.createElement("div");
      newElement.style.width = `${30 + (element + 1) * 10}px`;
      newElement.style.height = `${30 + (element + 1)* 10}px`;
      newElement.style.backgroundColor = getRandomHexColor();
      elementLinkSet.outContainerLink.appendChild(newElement);
    }
  }
  elementLinkSet.inputElementLink.value = "";
}

function destroyBoxes() {
  elementLinkSet.outContainerLink.innerHTML = "";
  elementLinkSet.inputElementLink.value = "";
}

elementLinkSet.controlsElementLink.addEventListener('click', e => {

  e.preventDefault();

  if(e.target.nodeName !== "INPUT") {
    if(e.target.hasAttribute("data-create") && elementLinkSet.inputElementLink.value.length !== 0) {
      createBoxes();
        return;
    }
    
    destroyBoxes()
  } 
});