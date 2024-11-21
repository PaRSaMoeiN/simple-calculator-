let currentInput = '';
let previousInput = '';
let operator = '';

function appendNumber(number) {
  if (currentInput.includes('.') && number === '.') return;
  currentInput += number;
  updateDisplay(currentInput);
}

function setOperation(op) {
  if (currentInput === '') return;
  if (previousInput !== '') calculate();
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

function updateDisplay(text) {
  document.getElementById('display').textContent = text;
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = '';
  updateDisplay('0');
}

function calculate() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  if (isNaN(prev) || isNaN(current)) return;
  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
    default:
      return;
  }
  currentInput = result;
  operator = '';
  previousInput = '';
  updateDisplay(result);
}