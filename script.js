
let operatorSelect = document.getElementById('operator');

operatorSelect.addEventListener('change', function(event) {
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);
    let operator = operatorSelect.value;
    let resultElement = document.getElementById('result');
    let result;

    if (operator === 'add') {
        result = number1 + number2;
    } else if (operator === 'subtract') {
        result = number1 - number2;
    } else if (operator === 'multiply') {
        result = number1 * number2;
    } else if (operator === 'divide') {
        result = number1 / number2;
        
    } else {
        result = 'please select operator';
    }
    resultElement.value = result;
});











// let form = document.getElementById("formm");
// form.addEventListener("submit", function(event) {    
//     let number1 = parseFloat(document.getElementById('number1').value);
//     let number2 = parseFloat(document.getElementById('number2').value);
//     let operator = document.getElementById('operator').value;
//     let resultElement = document.getElementById('result');
//     let result;
//     if (operator === 'add') {
//         result = number1 + number2;
//     } else if (operator === 'subtract') {
//         result = number1 - number2;
//     } else if (operator === 'multiply') {
//         result = number1 * number2;
//     } else if (operator === 'divide') {
//         result = number1 / number2;
//     } else {
//         result = 'Invalid operator';
//     }       
//     event.preventDefault();
//     resultElement.textContent = result;
// });

 

































// switch (operator) {
//     case 'add':
//         result = parseFloat(num1) + parseFloat(num2);
//         break;
//     case 'subtract':
//         result = num1 - num2;
//         break;
//     case 'multiply':
//         result = num1 * num2;
//         break;
//     case 'divide':
//         result = num1 / num2;
//         break;
// }



// const operations = {
//     'add': (num1, num2) => parseFloat(num1) + parseFloat(num2),
//     'subtract': (num1, num2) => num1 - num2,
//     'multiply': (num1, num2) => num1 * num2,
//     'divide': (num1, num2) => num1 / num2
// };

// if (operator in operations) {
//     result = operations[operator](num1, num2);
// } 
