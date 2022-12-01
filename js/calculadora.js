window.addEventListener('load', () => {
    const display = document.querySelector('.calcu-display');
    const keypadButtons = document.getElementsByClassName('keypad-button');

    const keypadButtonsArray = Array.from(keypadButtons);


    keypadButtonsArray.forEach((button) => {
        button.addEventListener('click', () => {
            calculadora(button, display);

        })
    })



});

function calculadora(button, display) {

    switch (button.innerHTML) {
        case 'C':
            borrar(display);
        break;

        case '=':
            calcular(display);
        break;

        default:
            actualizar(display, button);
        break;
    }
}

function calcular(display) {
    display.innerHTML = eval(display.innerHTML) // Tomar String,  y resolverlo y guardarlo en el inner html.
}

function actualizar(display, button) {
    if (display.innerHTML == 0) {
        display.innerHTML = '';

    }
    display.innerHTML += button.innerHTML;

}

function borrar(display) {
    display.innerHTML = 0;
}