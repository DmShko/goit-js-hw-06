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

  for(let element = 0; element < Number(elementLinkSet.inputElementLink.value); element += 1) {
    let newElement = document.createElement("div");
    newElement.style.width = `${30 * (element + 1)}px`;
    newElement.style.height = `${30 * (element + 1)}px`;
    newElement.style.backgroundColor = getRandomHexColor();
    elementLinkSet.outContainerLink.appendChild(newElement);
  }
}

function destroyBoxes() {
  elementLinkSet.outContainerLink.innerHTML = "";
}

elementLinkSet.controlsElementLink.addEventListener('click', e => {

  e.preventDefault();

  if(e.target.nodeName !== "INPUT" && elementLinkSet.inputElementLink.value.length !== 0) {
    if(e.target.hasAttribute("data-create")) {
      createBoxes();
        return;
    }
    destroyBoxes()
  }
});