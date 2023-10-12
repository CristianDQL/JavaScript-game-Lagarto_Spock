//tenog el autofocus puesto en html, lo añado con JS mejor?







let formulario;
let player;
let boton;

let main;

let piedra;
let papel;
let tijera;
let lagarto;
let spock;





window.addEventListener("load", ()=>{
    elementAccess();
    listenerGroup();

})


function elementAccess (){
    formulario = document.getElementById('formulario');
    player = document.getElementById('player');
    boton = document.getElementById('boton');
    main = document.getElementById('main');

    boton.disabled = true;
    main.style.display = "none";

    piedra = document.getElementById('piedra');
    papel = document.getElementById('papel');
    tijera = document.getElementById('tijera');
    lagarto = document.getElementById('lagarto');
    spock = document.getElementById('spock')
    


}

function listenerGroup (){

    formulario.addEventListener("input", ()=>{
        if(player.value.trim() === ''){
             boton.disabled = true;
        }else{
        boton.disabled = false;
        }


    });
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        
        startGame();
    });
}

function startGame(){
    main.style.display = "flex";
}

//funcion activa el juego cuando hago el submit

/**
 * 

function elementsModifier(){

}

function playerChoice(){
    //Crea un programa que permita 
     //al jugador ingresar su elección: "piedra", "papel", "tijeras", “lagarto” o “Spock”.
}

function pcChoice(){
    //Genera aleatoriamente la elección del oponente (el ordenador) utilizando un número aleatorio.
}

function choiceResult (){
    //Compara la elección del jugador con la elección del oponente y determina 
     //el resultado del juego según las siguientes reglas: reglas......
}

function winner( ){
    //Muestra el resultado del juego al jugador. 
}

function rePlay (){
    //Permite al jugador jugar nuevamente si lo desea.
}

//UN fn que añada el nombre del player en la frase de elige: ¡player, elige sabiamente!
 

 */

