let counterValue = 0;

const interfaceElemen = {
    decrementButton: document.querySelector('[data-action="decrement"]'),
    incrementButton: document.querySelector('[data-action="increment"]'),
    buttonContentChange: document.querySelector("#value"),
};

interfaceElemen.decrementButton.addEventListener("click", decrementChange);
interfaceElemen.incrementButton.addEventListener("click", incrementChange);

function decrementChange () {
    counterValue -= 1;
    interfaceElemen.buttonContentChange.textContent = counterValue;
}

function incrementChange () {
    counterValue += 1;
    interfaceElemen.buttonContentChange.textContent = counterValue;
}