function insert(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  let currentDisplay = document.getElementById("display").value;
  document.getElementById("display").value = currentDisplay.slice(0, -1);
}

function calculate() {
  let expression = document.getElementById("display").value;

  // Replace the caret symbol (^) with the exponentiation operator (**)
  expression = expression.replace(/\^/g, '**');

  try {
      let result = eval(expression);
      document.getElementById("display").value = result;
  } catch (error) {
      document.getElementById("display").value = "Error";
  }
}
