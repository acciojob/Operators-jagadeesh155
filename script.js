//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    // --- Calculator Logic ---
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

        if (isNaN(num1) || isNaN(num2)) {
            resultDiv.textContent = 'Please enter valid numbers.';
            resultDiv.style.color = '#dc3545'; // Red for error
            return;
        }

        switch (operator) {
            case '+':
                calculationResult = num1 + num2;
                break;
            case '-':
                calculationResult = num1 - num2;
                break;
            case '*':
                calculationResult = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    resultDiv.textContent = 'Cannot divide by zero!';
                    resultDiv.style.color = '#dc3545'; // Red for error
                    return;
                }
                calculationResult = num1 / num2;
                break;
            default:
                resultDiv.textContent = 'Invalid operator selected.';
                resultDiv.style.color = '#dc3545'; // Red for error
                return;
        }

        resultDiv.textContent = `Result: ${calculationResult}`;
        resultDiv.style.color = '#28a745'; // Green for success
    });

    // --- Text Changer Logic ---
    const changeTextButton = document.getElementById('change_text');
    const divisions = document.querySelectorAll('.division');

    const initialTexts = ["Hello", "Welcome", "To", "My", "Class"];
    const changedTexts = ["Bye", "Good Bye", "To", "Your", "Class"];
    let isInitialText = true; // Flag to track current state of text

    changeTextButton.addEventListener('click', () => {
        if (isInitialText) {
            divisions.forEach((div, index) => {
                div.textContent = changedTexts[index];
            });
            isInitialText = false;
            changeTextButton.textContent = "Reset Text"; // Optionally change button text
        } else {
            divisions.forEach((div, index) => {
                div.textContent = initialTexts[index];
            });
            isInitialText = true;
            changeTextButton.textContent = "Change Text"; // Optionally change button text back
        }
    });
});