//tenog el autofocus puesto en html, lo añado con JS mejor?







let formulario;
let player;
let boton;

let main;
let salon;

let imagenes;
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
    

    salon = document.getElementById('salon');

    imagenes = document.getElementsByClassName('imagen'); //es una array de elementos.
    
    piedra = document.getElementById('piedra');
    papel = document.getElementById('papel');
    tijera = document.getElementById('tijera');
    lagarto = document.getElementById('lagarto');
    spock = document.getElementById('spock')
    
    
    


}

function listenerGroup (){

    //activar el botón submit
    formulario.addEventListener("input", ()=>{
        if(player.value.trim() === ''){
             boton.disabled = true;
        }else{
        boton.disabled = false;
        }
    });

    

    //comenzar el juego tras submit
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        
        startGame();
        
    });


//hoover imágenes
    for(let i = 0; i < imagenes.length; i++){
    imagenes[i].addEventListener("mouseover", ()=>{
        imagenes[i].style.transform = "scale(1.2)";
    });
    imagenes[i].addEventListener("mouseout", ()=>{
        imagenes[i].style.transform = "scale(1)";
    });
    }

//elegir una opción
    for(let i = 0; i< imagenes.length; i++ )
    imagenes[i].addEventListener("click", ()=>{
        
        marcador();
    })





}

//funciones varias---------------------------------------------------------------

function startGame(){
    main.style.display = "flex";
    salon.style.display = 'none';
}

//LUCHAAAA

function turnoRival(){
    //CREAR UNA FUNCION RANDOM, PARA QUE ME DE UN RESULTADO Y LO USE COMO TURNOrIVAL EN EL IF.
}

function marcador(){
    let playerScore = 0;
    let enemyScore = 0;
    let resultado = 0;

    if(imagenes[i] == tijeras && turnoRival == tijeras){
        playerScore += 0;
        enemyScore += 0;
        resultado = "¡NEUTRALIZADOS!"; //tú ganas!
    }else if (turno == tijeras && turnoRival == papel){
        playerScore += 1;
        enemyScore += 0;
        resultado = "TIJERAS CORTAN PAPEL";
    }else if (turno == papel && turnoRival == papel){
        playerScore += 0;
        enemyScore += 0;
        resultado = "¡NEUTRALIZADOS!";
    }else if (turno == papel && turnoRival == piedra){
        playerScore += 1;
        enemyScore += 0;
        resultado = "¡PAPEL TAPA PIEDRA!";
    }else if (turno == piedra && turnoRival == piedra){
        playerScore += 0;
        enemyScore += 0;
        resultado = "¡NEUTRALIZADOS!";
    }else if (turno == piedra && turnoRival == lagarto){
        playerScore += 1;
        enemyScore += 0;
        resultado = "¡PIEDRA APLASTA LAGARTO!";
    }else if (turno == lagarto && turnoRival == lagarto){
        playerScore += 0;
        enemyScore += 0;
        resultado = "¡NEUTRALIZADOS!";
    }else if (turno == lagarto && turnoRival == spock){
        playerScore += 1;
        enemyScore += 0;
        resultado = "¡LAGARTO ENVENENA A SPOCK!";
    }else if (turno == spock && turnoRival == spock){
            playerScore += 0;
            enemyScore += 0;
            resultado = "¡NEUTRALIZADOS!";
    }else if (turno == spock && turnoRival == tijeras){
        playerScore += 1;
        enemyScore += 0;
        resultado = "¡SPOCK ROMPE TIJERAS!";
    }else if (turno == tijeras && turnoRival == lagarto){
            playerScore += 1;
            enemyScore += 0;
            resultado = "¡TIJERAS DECAPITAN LAGARTO!";
    }else if (turno == lagarto && turnoRival == papel){
        playerScore += 1;
        enemyScore += 0;
        resultado = "¡LAGARTO DEVORA PAPEL!";
    }else if (turno == papel && turnoRival == spock){
        playerScore += 1;
        enemyScore += 0;
        resultado = "¡PAPEL DESAUTORIZA A SPOCK!";
    }else if (turno == spock && turnoRival == piedra){
        playerScore += 1;
        enemyScore += 0;
        resultado = "¡SPOCK VAPORIZA PIEDRA!";
    }else if (turno == piedra && turnoRival == tijeras){
        playerScore += 1;
        enemyScore += 0;
        resultado = "¡COMO SIEMPRE, PIEDRA APLASTA TIJERAS!";
    }else if (turnoRival == tijeras && turno == papel){
        playerScore += 0;
        enemyScore += 1;
        resultado = "TIJERAS CORTAN PAPEL";
    }else if (turnoRival == papel && turno == piedra){
        playerScore += 0;
        enemyScore += 1;
        resultado = "¡PAPEL TAPA PIEDRA!";
    }else if (turnoRival == piedra && turno == lagarto){
        playerScore += 0;
        enemyScore += 1;
        resultado = "¡PIEDRA APLASTA LAGARTO!";
    }else if (turnoRival == lagarto && turno == spock){
        playerScore += 0;
        enemyScore += 1;
        resultado = "¡LAGARTO ENVENENA A SPOCK!";
    }else if (turnoRival == spock && turno == tijeras){
        playerScore += 0;
        enemyScore += 1;
        resultado = "¡SPOCK ROMPE TIJERAS!";
    }else if (turnoRival == tijeras && turno == lagarto){
        playerScore += 0;
        enemyScore += 1;
        resultado = "¡TIJERAS DECAPITAN LAGARTO!";
    }else if (turnoRival == lagarto && turno == papel){
        playerScore += 0;
        enemyScore += 1;
        resultado = "¡LAGARTO DEVORA PAPEL!";
    }else if (turnoRival == papel && turno == spock){
        playerScore += 0;
        enemyScore += 1;
        resultado = "¡PAPEL DESAUTORIZA A SPOCK!";
    }else if (turnoRival == spock && turno == piedra){
        playerScore += 0;
        enemyScore += 1;
        resultado = "¡SPOCK VAPORIZA PIEDRA!";
    }else if (turnoRival == piedra && turno == tijeras){
        playerScore += 0;
        enemyScore += 1;
        resultado = "¡COMO SIEMPRE, PIEDRA APLASTA TIJERAS!";
    } 
   
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

