let numeroSecreto = 0;
let intentos = 0;
let listasNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}`);
        
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        //el usuario no acerto
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento('p','el numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos ++;
        limpiarcaja();
    }
    return;
}

function limpiarcaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    if (listasNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se acabaron todos los numeros posibles')
    }else{

        if(listasNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listasNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto')
    asignarTextoElemento('p', `Digita un numero entre el 1 al ${numeroMaximo}`)
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarcaja();
    
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
}

condicionesIniciales();


