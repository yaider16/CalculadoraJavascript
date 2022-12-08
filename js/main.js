

// Lógica de calculator


/* Cuando inicia el documento activala funcion*/ 
window.addEventListener('load', ()=>{

    // Creamos dos constantes y los guardamos
    const display = document.querySelector('.calculator-display');
    const keypadButtons =document.getElementsByClassName('keypad-button');

    // Creamos array de todos los elementodes del keypad dela calculator
    const keypadButtonsArray = Array.from(keypadButtons);

    // Recorremos cada uno de los elementos del array y le agregamos el evento de click
    keypadButtonsArray.forEach((button) => {
        button.addEventListener('click', ()=> {
           calculadora(button, display)
        });
    });

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
            actualizar(display,button);
            break;
    }
}
// La funcion eval evalua un string para convertirlo a numero
function calcular(display){
    display.innerHTML = eval(display.innerHTML);
}
function actualizar(display,button){
    if (display.innerHTML == 0){
        display.innerHTML = '';
    }
    display.innerHTML+= button.innerHTML;
}
function borrar(display){
    display.innerHTML = 0;
}