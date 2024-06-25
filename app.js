let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
//Funciones del Sistema

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.textContent = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(
        document.getElementById("valorUsuario").value
    );

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento(
            "p",
            `Acertaste el número en ${intentos} ${
                intentos == 1 ? "vez" : "veces"
            }`
        );
        //remover una etiqueta del html - disable
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionalesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

function condicionalesIniciales() {
    //Llamada de las funciones
    asignarTextoElemento("h1", "Juego del número secreto!");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    //Generar el numero aleatorio
    numeroSecreto = generarNumeroSecreto();
    //Iniciarlizar el numero de intentos
    intentos = 1;
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;

    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {
        //Si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroSecreto)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroSecreto);
            return numeroSecreto;
        }
    }
}

condicionalesIniciales();
