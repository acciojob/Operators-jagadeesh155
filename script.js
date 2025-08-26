// Calculator Logic
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operatorSelect = document.getElementById('operator');
const calculateButton = document.getElementById('calculate');
const resultDiv = document.getElementById('result');

calculateButton.addEventListener('click', () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operator = operatorSelect.value;
    let calculationResult;

    switch (operator) {
        case '+': calculationResult = num1 + num2; break;
        case '-': calculationResult = num1 - num2; break;
        case '*': calculationResult = num1 * num2; break;
        case '/': calculationResult = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero'; break;
    }
    resultDiv.innerText = "Result: " + calculationResult;
});

// Text Changer Logic
const changeTextButton = document.getElementById('change_text');
const divisions = document.querySelectorAll('.division');

changeTextButton.addEventListener('click', () => {
    const newText = ["Bye", "Good Bye", "To", "Your", "Class"];
    divisions.forEach((div, index) => {
        div.innerText = newText[index];
    });
});
