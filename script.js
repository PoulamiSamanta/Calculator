// Function to insert numbers and operators into the display
function insert(value) {
    document.getElementById("display").value += value;
}

// Function to clear the display
function clearScreen() {
    document.getElementById("display").value = "";
}

// Function to delete the last character
function deleteLast() {
    let currentValue = document.getElementById("display").value;
    document.getElementById("display").value = currentValue.substring(0, currentValue.length - 1);
}

// Function to perform scientific operations
function scientificOperation(operation) {
    let currentValue = document.getElementById("display").value;
    let result = "";

    switch (operation) {
        case 'sin':
            result = Math.sin(toRadians(currentValue));
            break;
        case 'cos':
            result = Math.cos(toRadians(currentValue));
            break;
        case 'tan':
            result = Math.tan(toRadians(currentValue));
            break;
        case 'sqrt':
            result = Math.sqrt(currentValue);
            break;
        case 'log':
            result = Math.log10(currentValue);
            break;
        case 'exp':
            result = Math.exp(currentValue);
            break;
    }

    document.getElementById("display").value = result;
}

// Function to convert degrees to radians
function toRadians(angle) {
    return angle * (Math.PI / 180);
}

// Function to calculate the final result
function calculate() {
    let expression = document.getElementById("display").value;
    try {
        document.getElementById("display").value = eval(expression);
    } catch (e) {
        document.getElementById("display").value = "Error";
    }
}
