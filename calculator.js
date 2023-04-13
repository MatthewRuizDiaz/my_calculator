const result = document.getElementById('result');

function appendValue(value) {
  if (result.innerText === '0' && value !== '.') {
    result.innerText = value;
  } else {
    result.innerText += value;
  }
}

function calculate() {
  try {
    result.innerText = eval(result.innerText);
  } catch (error) {
    result.innerText = 'Error';
  }
}

function clearResult() {
  document.getElementById('result').innerHTML = '0';
  operand1 = null;
  operand2 = null;
  operator = null;
}
