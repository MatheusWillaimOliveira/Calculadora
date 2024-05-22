function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.getElementById('display');
    let expression = display.value;
    
    try {
        expression = expression.replace(/\^/g, '**'); // Replace ^ with **
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Erro';
    }
}
