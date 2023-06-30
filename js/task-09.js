function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elementLinkSet = {
  spanElement: document.querySelector('.color'),
  bodyElement: document.body,
};

const colorChangeElement = document.querySelector('button.change-color')
  .addEventListener('click', (e) => {
    let colorValue = getRandomHexColor();
    elementLinkSet.bodyElement.style.backgroundColor = colorValue;
    elementLinkSet.spanElement.textContent = colorValue;  
  });