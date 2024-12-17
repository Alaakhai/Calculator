
let buttons = document.querySelectorAll('button'); // تغيير اسم المتغير
const inputv = document.getElementsByClassName('result')[0];

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        const buttonValue = buttons[i].textContent;
        if (buttonValue === 'C') {
            clearResult();
        } else if (buttonValue === "=") {
            calculateResult();
        } else {
            appendValue(buttonValue);
        }
    });
}

function clearResult() {
    inputv.value = "";
}

function calculateResult() {
    try {
        inputv.value = eval(inputv.value); // ضع في اعتبارك استبدال eval بحل أكثر أمانًا
    } catch (error) {
        inputv.value = "Error";
    }
}

function appendValue(buttonValue) {
    inputv.value += buttonValue;
}
