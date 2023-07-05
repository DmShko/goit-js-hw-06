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
  // get input value (box quantity)
  let  countElements = Number(elementLinkSet.inputElementLink.value);

  // get min, max, step
  const minValue = Number(elementLinkSet.inputElementLink.min);
  const maxValue = Number(elementLinkSet.inputElementLink.max);
  const stepValue = Number(elementLinkSet.inputElementLink.step);

  // check input value
  if(minValue < countElements && countElements <= maxValue) {
    const boxesSet = [];
    for(let element = 0; element < countElements; element += stepValue) {
      let newElement = document.createElement("div");
      newElement.style.width = `${30 + (element + 1) * 10}px`;
      newElement.style.height = `${30 + (element + 1) * 10}px`;
      newElement.style.backgroundColor = getRandomHexColor();
      boxesSet[element] = newElement;
    }
    // add all box to "boxes"
    elementLinkSet.outContainerLink.append(...boxesSet);
  }
  // cleaner input
  elementLinkSet.inputElementLink.value = "";
}
 
// cleaner "boxes"
function destroyBoxes() {
  elementLinkSet.outContainerLink.innerHTML = "";
  elementLinkSet.inputElementLink.value = "";
}

elementLinkSet.controlsElementLink.addEventListener('click', e => {

  e.preventDefault();

  // check event target and select operation
  if(e.target.nodeName !== "INPUT") {
    if(e.target.hasAttribute("data-create") && elementLinkSet.inputElementLink.value.length !== 0) {
      createBoxes();
        return;
    }
    if(e.target.hasAttribute("data-destroy") && elementLinkSet.inputElementLink.value.length === 0) {
      destroyBoxes()
        return;
    }
  } 
});