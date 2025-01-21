let currentInput = '';
let lastOperation = null;

function updateDisplay(value) {
  const display = document.getElementById('display');
  display.textContent = value || '0';
}

function appendNumber(number) {
  currentInput += number;
  updateDisplay(currentInput);
}

function appendOperator(operator) {
  if (currentInput && !isNaN(currentInput[currentInput.length - 1])) {
    currentInput += ` ${operator} `;
    updateDisplay(currentInput);
  }
}

function clearDisplay() {
  currentInput = '';
  updateDisplay('');
}

function backspace() {
  currentInput = currentInput.trim().slice(0, -1);
  updateDisplay(currentInput || '0');
}

function calculate() {
  try {
    const sanitizedInput = currentInput.replace(/×/g, '*').replace(/÷/g, '/');
    const result = eval(sanitizedInput);
    currentInput = result.toString();
    updateDisplay(result);
  } catch (error) {
    updateDisplay('Error');
    currentInput = '';
  }
}
