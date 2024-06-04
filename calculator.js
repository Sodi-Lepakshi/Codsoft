let display = document.getElementById('display');
let currentInput = '';

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function appendCharacter(character) {
    if (currentInput === '0') {
        currentInput = character;
    } else {
        currentInput += character;
    }
    updateDisplay();
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
        currentInput = '';
    }
}

function updateDisplay() {
    display.textContent = currentInput || '0';
}
